import React, { Component } from 'react';
import '../components/index.css';
import { observer } from 'mobx-react';
import { CalculatorStore } from '../stores';

const store = new CalculatorStore();
const operations = ['AC','DEL','%','÷','7','8','9','*','4','5','6','+','1','2','3','-','.','0','='];

export const Calculator = observer(class extends Component {
  render() {
    return (
      <div className="calculator">
        <div className='computation'>{store.answer}</div>
        <div className='operations'>
          {operations.map((item, i) =>
            <button 
              key={i} 
              className={item === '=' ? 'operation operation__ac' : 'operation'} 
              onClick={item === '÷' ? () => store.calculate('/') : () => store.calculate(item)}>
                {item}
            </button>
          )}
        </div>
      </div>
    )
  }
})