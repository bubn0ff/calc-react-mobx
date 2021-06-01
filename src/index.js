import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CalculatorStore } from './stores';
import { Provider } from 'mobx-react';

const store = new CalculatorStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
document.getElementById('root'));