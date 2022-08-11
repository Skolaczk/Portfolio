import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import 'assets/styles/normalize.css';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';

export const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
