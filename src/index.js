import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    background: '#9dc2c2',
    backgroundOpacity: '#f5f8f8',
    textTitle: '#252c2c',
    text: '#384343',
    error: '#ff9958',
    border: '#619191',
    hover: '#a1e0d1',
  },
  spacing: value => `${value * 8}px`,
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
