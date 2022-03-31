import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import './scss/main.scss'

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Failed to find the root element');
const root = ReactDOMClient.createRoot(rootEl);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
