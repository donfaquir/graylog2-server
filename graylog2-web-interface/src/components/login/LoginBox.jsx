import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import AuthThemeStyles from 'theme/styles/authGlobal';

const LoginBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const LoginContainer = styled.div(({ theme }) => css`
  background-color: ${theme.color.primary.due};
  width: 20vw;
  min-width: max-content;
  padding: 9px 18px;
  border-radius: 4px;
`);

const LoginBox = ({ children }) => {
  return (
    <LoginBoxWrapper className="container">
      <AuthThemeStyles />
      <LoginContainer>
        {children}
      </LoginContainer>
    </LoginBoxWrapper>
  );
};

LoginBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginBox;
