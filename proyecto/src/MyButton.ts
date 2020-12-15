import { html, css, LitElement, property } from 'lit-element';

export class MyButton extends LitElement {

  @property({ type: Boolean }) estado = false;
  @property({ type: String }) nombre = "ENVIAR VOTOS";
  
  static get styles(){
    return css`
      :host {
        padding: 2%;
        font-family: 'Roboto', sans-serif;
        font-size: 1vw;
        display:block;
        position: relative;
        margin-right:auto;
        margin-left:auto;
      }
      .btn {
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 1.5%;
        padding-bottom: 1.5%;
        border-radius: 15px;
        
      }
      .flotante {
        display:scroll;
        position:fixed;
        bottom:50px;
        right:0px;
      }
    `}
  
    _onClick(e: any){
      this.estado == true ? this.estado = false : this.estado = false ; 
      console.log(this.estado);
      //boton.selected = true;
    }
    render() {
      return html`
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

      <!--roboto-->
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
      <!--roboto-->
      <div class="col text-center flotante">
        <button type="button" class="btn btn-warning" id="voto" onclick="${this._onClick}"><b>${this.nombre}</b></button>
      </div>
      `;}
  }
  
  window.customElements.define('my-button', MyButton);