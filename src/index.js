import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Normalize } from 'styled-normalize'
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const Global = createGlobalStyle`
  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 960px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1110px;
    }
  }

  .row {
    margin-left: -15px;
    margin-right: -15px;
  }
`;

const theme = {
  color: {
    primary: '#000',
    secondary: '#7D7987',
    accent: '#FB8F1D'
  },
  fonts: {
    primary: 'Playfair Display, serif',
    secondry: 'Mulish, sans- serif',
    tertiary: 'Inter, sans- serif',
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider {...{ theme }}>
      <Normalize />
      <Global />
      <App />
    </ThemeProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

