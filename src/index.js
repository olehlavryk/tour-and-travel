import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Normalize } from 'styled-normalize'
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const Global = createGlobalStyle`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1,h2,h3,h4,h5,h6 {
    padding: 0;
    margin: 0;
  }

  a {
    transition: ${props => props.theme.transition.default};
    text-decoration: none;
  }

  .img__responsive {
    width: 100%;
    height: auto;
    display: block;
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
    secondary: 'Mulish, sans-serif',
    tertiary: 'Inter, sans-serif',
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

