import './button.css';

export default class ClickCounter {

  constructor(count) {
    if (!count) {
      this.count = 0;
    } else {
      this.count = count;
    }
    
    this.button = document.createElement('button');
    this.button.className = 'click-counter'
    this.button.innerHTML = 'Button was not clicked yet';
    this.button.onclick = () => this.increment();
  }

  increment() {
    this.count++;
    this.button.innerHTML = `Button was clicked ${this.count} times`;
  }
}