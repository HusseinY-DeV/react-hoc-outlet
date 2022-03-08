import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { LoadingContext } from './components/context/loading/LoadingContext';
import { ClientContext } from './components/context/client/ClientContext';
import App from './App';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <ClientContext>
      <LoadingContext>
        <App />
      </LoadingContext>
    </ClientContext>
  </BrowserRouter>,
  document.getElementById('root')
);

