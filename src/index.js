import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App';
import Providers from './providers/Providers';

ReactDOM.render(
  <Providers>
    <App />
  </Providers>
  , 
  document.getElementById('root'), 
)