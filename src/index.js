import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {OrderCtxProvider} from './Contexts/OrderContext'

ReactDOM.render(
  <OrderCtxProvider>
    <App />
  </OrderCtxProvider>,
  document.getElementById('root')
);
