/**
 * Copyright 2010, 2011 Lennart Koopmann <lennart@socketfeed.com>
 *
 * This file is part of Graylog2.
 *
 * Graylog2 is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Graylog2 is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Graylog2.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

package org.graylog2.database;

import com.mongodb.*;

import java.util.List;

/**
 * MongoConnection.java: Jun 6, 2010 1:36:19 PM
 *
 * MongoDB connection singleton
 *
 * @author Lennart Koopmann <lennart@socketfeed.com>
 */
public final class MongoConnection {
    private static MongoConnection instance;

    private Mongo m;
    private DB db;

    private DBCollection realtimeMessagesCollection;
    private DBCollection messageCountsCollection;

    private static final String REALTIME_MESSAGE_COLLECTION_NAME = "realtime_messages";
    private static final int REALTIME_MESSAGE_COLLECTION_SIZE = 52428800; // 50 MB

    private MongoConnection() {}

    /**
     * Get the connection instance
     * @return MongoConnection instance
     */
    public static synchronized MongoConnection getInstance() {
        if (instance == null) {
            instance = new MongoConnection();
        }
        return instance;
    }

    /**
     * Connect the instance.
     *
     * @param username MongoDB user
     * @param password MongoDB password
     * @param hostname MongoDB host
     * @param database MongoDB database
     * @param port MongoDB port
     * @param useAuth Use authentication?
     * @param maxConnections
     * @param threadsAllowedToBlockForConnectionMultiplier
     * @param replicaServers
     *
     * @throws Exception
     */
    public void connect(String username, String password, String hostname, String database, int port, boolean useAuth,
                        int maxConnections, int threadsAllowedToBlockForConnectionMultiplier,
                        List<ServerAddress> replicaServers, long messagesCollSize) throws Exception {
        MongoOptions options = new MongoOptions();
        options.connectionsPerHost = maxConnections;
        options.threadsAllowedToBlockForConnectionMultiplier = threadsAllowedToBlockForConnectionMultiplier;

        try {

            // Connect to replica servers if given. Else the standard way to one server.
            if (replicaServers != null && replicaServers.size() > 0) {
                m = new Mongo(replicaServers, options);
            } else {
                ServerAddress address = new ServerAddress(hostname, port);
                m = new Mongo(address, options);
            }

            db = m.getDB(database);

            // Try to authenticate if configured.
            if (useAuth) {
                if(!db.authenticate(username, password.toCharArray())) {
                    throw new Exception("Could not authenticate to database '" + database + "' with user '" + username + "'.");
                }
            }
        } catch (MongoException.Network e) {
            throw new Exception("Could not connect to Mongo DB.", e);
        }
    }

    /**
     * Returns the raw connection.
     * @return connection
     */
    public Mongo getConnection() {
        return m;
    }

    /**
     * Returns the raw database object.
     * @return database
     */
    public DB getDatabase() {
        return db;
    }

    /**
     * Get the message realtime collection. Lazily creates a new, capped one
     * if there is none.
     *
     * @return The messages collection
     */
    public DBCollection getRealtimeMessagesColl() {
        // Return cached collection if it has been checked and created already.
        if (this.realtimeMessagesCollection != null) {
            return this.realtimeMessagesCollection;
        }

        // Collection has not been cached yet. Do it now.
        DBCollection coll = null;

        // Create a capped collection if the collection does not yet exist.
        if(MongoConnection.getInstance().getDatabase().collectionExists(REALTIME_MESSAGE_COLLECTION_NAME)) {
            coll = MongoConnection.getInstance().getDatabase().getCollection(REALTIME_MESSAGE_COLLECTION_NAME);
        } else {
            coll = MongoConnection.getInstance()
                    .getDatabase()
                    .createCollection(REALTIME_MESSAGE_COLLECTION_NAME, BasicDBObjectBuilder.start()
                    .add("capped", true)
                    .add("size", REALTIME_MESSAGE_COLLECTION_SIZE)
                    .get());
        }

        this.realtimeMessagesCollection = coll;
        return coll;
    }

    /**
     * Get the message_counts collection. Lazily checks if correct indizes are set.
     *
     * @return The messages collection
     */
    public DBCollection getMessageCountsColl() {
        if (this.messageCountsCollection != null) {
            return this.messageCountsCollection;
        }

        // Collection has not been cached yet. Do it now.
        DBCollection coll = MongoConnection.getInstance().getDatabase().getCollection("message_counts");

        coll.ensureIndex(new BasicDBObject("timestamp", 1));

        this.messageCountsCollection = coll;
        return coll;
    }

}
