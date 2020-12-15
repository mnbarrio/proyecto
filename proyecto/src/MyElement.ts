import { html, css, LitElement, property } from 'lit-element';
import 'bootstrap';

export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--my-element-text-color, #000);
    }
  `;

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
    <h2>${this.title} Nr. ${this.counter}!</h2>
    <button @click=${this.__increment}>wenaaa</button>
    
    `;
  }
}

window.customElements.define('my-element', MyElement);