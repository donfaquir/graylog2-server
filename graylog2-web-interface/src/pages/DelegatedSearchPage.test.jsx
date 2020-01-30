jest.mock('c3', () => ({ default: jest.fn() }))
  // eslint-disable-next-line global-require
  .mock('injection/CombinedProvider', () => new (require('helpers/mocking').CombinedProviderMock)());

/* eslint-disable import/first */
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { PluginManifest, PluginStore } from 'graylog-web-plugin/plugin';

import DelegatedSearchPage from 'pages/DelegatedSearchPage';
/* eslint-enable import/first */


test('Renders other component if registered', () => {
  const renderer = new ShallowRenderer();
  const SimpleComponent = () => <div>Hello!</div>;

  PluginStore.register(new PluginManifest({}, {
    pages: {
      search: { component: SimpleComponent },
    },
  }));

  const tree = renderer.render(<DelegatedSearchPage />);

  expect(tree).toMatchSnapshot();
});
