import { html, css, LitElement, property } from 'lit-element';

class TieDesing extends LitElement {
    static get styles(){
      return css `
      .tecline.blue{
        position: absolute;
        bottom: 0.4vw;
        background-color: #0099FF;
        width: 120%;
        height: 0.2vw;
        margin-left: -16%;
      }

      .tecline.yellow{
        position: absolute;
        bottom: 0;
        background-color: #FCC53F;
        width: 120%;
        height: 0.2vw;
        margin-left: -16%;
      }

      .tecline.red{
        position: absolute;
        bottom: 0.2vw;
        background-color: #D42029;
        width: 120%;
        height: 0.2vw;
        margin-left: -16%;
      }

    .vertical-line.blue{
      width: 0.25vw;
      background-color:#0099FF;
      position:absolute;
      height: 45%;
      top:55%;
      bottom:0;
      right:4vw;
    }

    .vertical-line.red{
      width: 0.20vw;
      background-color:#D42029;
      position:absolute;
      height: 35%;
      top:65%;
      bottom:0;
      left:91.1%;
    }

    .vertical-line.yellow{
      width: 0.20vw;
      background-color:#FCC53F;
      position:absolute;
      height: 24.5%;
      top:75.5%;
      bottom:0;
      left:87.2%;
    }

    .vertical-text.blue{
      width: 0.25vw;
      position:absolute;
      color: #0099FF;
      height: 65%;
      top:20%;
      bottom:0;
      left: 112vw;
      transform: rotate(270deg);
      font-size:1.5vw;
    }

    .vertical-text.red{
      width: 0.25vw;
      position:absolute;
      color: #D42029;
      height: 65%;
      top:30%;
      bottom:0;
      left: 107vw;
      transform: rotate(270deg);
      font-size:1.5vw;
    }

    .vertical-text.yellow{
      width: 0.25vw;
      position:absolute;
      color: #FCC53F;
      height: 65%;
      top:40%;
      bottom:0;
      left: 103vw;
      transform: rotate(270deg);
      font-size:1.5vw;
    }
      `;
    }

    render() {
      return html`
      <!--EMPRENDIMIENTO-->
      <div class="tecline blue">
      </div>

      <div class="vertical-line blue">
      </div>
      <!--EMPRENDIMIENTO-->

      <div class="tecline red">
      </div>

      <div class="vertical-line red">
      </div>

      <div class="tecline yellow" >
      </div>

      <div class="vertical-line yellow">
      </div>
    </div>
    <!--Título-->
    <div class="vertical-text blue"><strong>EMPRENDIMIENTO</strong></div>
    <div class="vertical-text red"><strong>INNOVACIÓN</strong></div>
    <div class="vertical-text yellow"><strong>TECNOLOGÍA</strong></div>
    `;
  }
}
window.customElements.define('my-tiedesing',TieDesing);
