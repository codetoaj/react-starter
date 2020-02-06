import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

if ( 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('SW registered:', registration);
      })
      .catch((error) => {
        console.log('SW registration failed:', error);
      })
  });
}

ReactDOM.render(<App />, document.getElementById('root'));