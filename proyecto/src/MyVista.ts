import { html, css, LitElement, property } from 'lit-element';


class MyVista extends LitElement {
    createRenderRoot() {
      const contentWrapper = document.createElement('div');
      this.appendChild(contentWrapper);
      return contentWrapper;
    }
  }