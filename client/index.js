import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; //note: all the application have what redux offers
import App from './App.jsx';
import store from './store';

const root = createRoot(document.getElementById('contents'));
root.render(
  // wrap the App in the Provider Component and pass in the store
  <Provider store={store}><App /></Provider> // hold the store
  // presentation had document root query selector
);