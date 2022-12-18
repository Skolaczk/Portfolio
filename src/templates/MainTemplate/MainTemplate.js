import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import 'assets/styles/normalize.css';
import { ModalProvider } from '../../hooks/useModal';
import { WindowProvider } from '../../hooks/useWindow';

export const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <WindowProvider>
        <ModalProvider>{children}</ModalProvider>
      </WindowProvider>
    </ThemeProvider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
