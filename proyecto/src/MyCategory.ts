import { html, css, LitElement, property } from 'lit-element';

export class MyCategory extends LitElement {

  @property({ type: String }) up = "Inteligencia";
  @property({ type: String }) down = "ARTIFICIAL";
  @property({ type: String }) estilo = "azul";

  
  static get styles(){
    return css`
      :host {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-size: cover;
      }
      .up {
          font-size: 2vw;
      }
      .down {
        display: flex;
          font-size: 7vw;
      }
      .categoria {
        height: fit-content;
        width: 60%;
        color: white;
        font-family: 'Roboto', sans-serif;
        position: absolute;
        top:30%;
        left:63%;
        float: right;
        transform: rotate(-90deg);
      }
      .filtro {
        background: rgba(2,5,31,70);
        opacity: 0.7;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
      `}
    
   
    render() {
      return html`
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

      <!--roboto-->
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500;900&display=swap" rel="stylesheet">
      <!--roboto-->
      <div class="categoria">
        <div class="up"><b>${this.up}</b></div>
        <div class="down"><b>${this.down}</b></div>
      </div>
        <div class="filtro "></div>

      <div style="margin-top: 10%;">
        <my-vote color="${this.estilo}" title="FlyBBit: HappyCrops" content="HappyCrops es un servicio de monitoreo periódico para los cultivos. Durante los monitoreos se capturan imágenes de los cultivos las cuales son posteriormente analizadas utilizando machine learning para detectar posibles enfermedades y en el caso de ser así generar un diagnóstico del estado actual y el tratamiento a seguir." ></my-vote>
        <my-vote color="${this.estilo}" title="REVODeps: +Life" content="Sistema informático para la predicción de escasez sanguínea y la realización de tareas esenciales de los centros de transfusión de sangre." ></my-vote>
        <my-vote color="${this.estilo}" title="hola" content="ajdkasjdkja" ></my-vote>
 
      </div>
     `;}
  }
  
  window.customElements.define('my-category', MyCategory);