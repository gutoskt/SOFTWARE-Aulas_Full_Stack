import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // cria a raiz do React no elemento com id 'root', isso significa que todo o conteúdo do React será renderizado dentro desse elemento.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

