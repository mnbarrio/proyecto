import { html, css, LitElement, property } from 'lit-element';

class NavBarTest extends LitElement {

  static get styles(){

    return css`
    li { /*modificación de li*/
      margin:1%;
      cursor: pointer;
    }

    .flotante {
      display:scroll;
      position:fixed;
      bottom:250px;
      right:100px;
    }

    .cover_color{
      color: white;
    }
    .cover_color.blue:hover{
      color: #0099FF;
    }
    .cover_color.red:hover{
      color: #D42029;
    }
    .cover_color.yellow:hover{
      color: #FCC53F;
    }

    .logotipo { /*logo navbar fondo posicion y tamaño*/
      background-color:rgba(165, 42, 42, 0);
      float:left;
      margin-top:2%;
      margin-left:1%;
      height: 70px;
      opacity: 1;
    }
    .navbarbutton { /*estilo area botones de la navbar*/
      width: 100%;
      margin-left: 10px;
      float:left;
      white-space: nowrap;
      color: white;
      text-align: center;
    }
  `;

  }
  render() {
    return html`
    <!--Bootstrap-->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../node_modules/smart-webcomponents/source/styles/smart.default.css" type="text/css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet">
    <link rel="stylesheet" href="../src/index.css" type="text/css" />
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Open+Sans:wght@300&family=Roboto:ital,wght@0,100;0,300;0,400;1,900&display=swap" rel="stylesheet">
    <!--Bootstrap-->

    <nav class="navbar navbar-expand-md">
      <div class="navbar-collapse  w-100 order-1 order-md-0 ">

          <!--izquirda-->
          <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="navbar-brand" href="principal.html">
                  <img class="logotipo" src="../images/logo_feria.png" alt="Haz clic aquí para volver a la página de inicio">
                </a>
              </li>

              <li class="nav-item">
                <a class="navbar-brand" href="https://www.usm.cl">
                  <img class="logotipo" style="height: 90px; opacity: 100; position: absolute; top: -20px;" src="../images/logo_usm.png">
                </a>
              </li>
          </ul>
          <!--izquirda-->

          <!--derecha-->
          <ul class="navbar-nav d-flex flex-row-reverse">
            <li class="nav-item navbarbutton"><p class="nav-link cover_color blue" href="#xd">¡Envíanos tu proyecto!</p></li>
            <li class="nav-item navbarbutton"><p class="nav-link cover_color red" href="#xd">+INFO</p></li>
            <li class="nav-item navbarbutton"><p class="nav-link cover_color red" href="#xd">Contacto</p></li>
            <li class="nav-item navbarbutton"><p class="nav-link cover_color red" href="#xd">Historia</p></li>
            <li class="nav-item navbarbutton"><a class="nav-link cover_color yellow" href="categorias.html">Vota por tu favorito</a></li>
        </ul>
        <!--derecha-->
      </div>
    </nav>
    `;
  }
}
window.customElements.define('my-navbarp',NavBarTest);
