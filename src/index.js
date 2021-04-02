import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Normalize } from 'styled-normalize'
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const Global = createGlobalStyle`
  .App {
    min-height: 100vh;
    overflow: hidden;
  }

  a {
    transition: ${props => props.theme.transition.default}
  }

  .container {
    padding-right: 50px;
    padding-left: 50px;
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
      width: 1120px;
    }
  }

  .row {
    margin-left: -50px;
    margin-right: -50px;
  }
`;

const theme = {
  colors: {
    primary: '#000',
    secondary: '#7D7987',
    accent: '#FB8F1D',
    accentSecondary: '#1ABE84',
    lightGrey: '#B8BECD',
  },
  fonts: {
    primary: 'Playfair Display, serif',
    secondry: 'Mulish, sans- serif',
    tertiary: 'Inter, sans- serif',
  },
  transition: {
    default: 'all 300ms ease-in'
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

