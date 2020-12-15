import { html, css, LitElement, property } from 'lit-element';
import 'bootstrap';

export class MyNavBar extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    li { /**/
        margin:1%;
        cursor: pointer;
    }
    .logotipo { /*logo navbar fondo posicion y tamaño*/
        background-color:rgba(165, 42, 42, 0);
        float:left;
        margin:2%;
        width: 25%;
        height: 25%;
        }
    .material-icons.md-search { /*iconos navbar menu a la tamaño y color*/
        color: white; 
        font-size: 200%;
    }
    .dropdown-left-manual { /*dropdown menu a la izquierda*/
    right: 0;
    left: auto;
    padding-left: 1px;
    padding-right: 1px;
    }
  `;
  _back(e: any) {
    history.back()
  }

  render() {
    return html`
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <nav class="navbar navbar-expand-md">
      <div class="navbar-collapse  w-100 order-1 order-md-0 ">
          <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="navbar-brand" href="#home">
                  <img class="logotipo" src="../images/logo.png" alt="Haz clic aquí para volver a la página de inicio">
                </a>
              </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"><span class="material-icons md-search nav-link" href="prueba.html">search</span></li>
            <li class="nav-item"><span class="material-icons md-search nav-link" @click=${this._back}>keyboard_backspace</span></li>
            <li class="dropdown nav-item dropleft" >
              <span class="material-icons md-search dropdown-toggle-split nav-link" data-toggle="dropdown" type="button" >list</span>
              <div class="dropdown-menu dropdown-left-manual">
                <a class="dropdown-item" href="#"> Sobre Nosotros</a>
                <a class="dropdown-item" href="#">Proyectos</a>
                <a class="dropdown-item" href="#">Contacto</a>
              </div>
            </li>
        </ul>

      </div>
    </nav>
    `;
  }
}

window.customElements.define('my-navbar', MyNavBar);