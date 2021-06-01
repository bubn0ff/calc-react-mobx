import { makeObservable, observable, action } from "mobx";
import { parseString, buttonDel, percent } from '../function';

export class CalculatorStore {
  computation = '';
  answer = '';

  constructor() {
    makeObservable(this, {
      computation: observable,
      answer: observable,
      calculate: action.bound
    })
  }

  calculate(operation) {
    switch(operation) {
      case 'AC':
        this.computation = '';
        this.answer = 0;
        break;
      case 'DEL':
        this.computation = buttonDel();
        this.answer = this.computation;
        break;
      case '%':
        this.computation = percent();
        this.answer = this.computation;
        break;
      case '=':
        try {
          this.answer = parseString(this.computation);
        } catch {
          window.alert('Возникла непредвиденная ошибка! Проверьте правильность ввода данных');
          this.answer = 0;
        } finally {
          this.computation = '';
        }
        break;
      default:
        this.computation = this.computation + operation;
        this.answer = this.computation;
    }
  }
};
