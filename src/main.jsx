import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import { Provider } from 'react-redux';
import store from './Redux/store';
import App from './App';

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
