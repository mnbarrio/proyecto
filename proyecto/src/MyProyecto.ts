import { html, css, LitElement, property } from 'lit-element';
export class MyProyecto extends LitElement {
    @property({ type: String }) preempresa = "FlyBit";
    @property({ type: String }) proyecto = "HappyCrops";
    @property({ type: String }) descripcion = "HappyCrops busca ayudar a los agricultores a detectar de forma temprana infecciones que podrían estar afectando a sus cultivos mediante drones, para recomendar un curso de acción sobre qué producto aplicar y dónde aplicarlo.";
    @property({ type: String }) color = "#132e49c8";
    @property({ type: String }) color_fondo = "#132e49f2";
    @property({ type: String }) categoria = "td";
    @property({ type: String }) titulo_categoria = "Inteligencia Artificial";
    @property({ type: String }) titulo_IA = "Inteligencia Artificial";
    @property({ type: String }) titulo_TD = "Trasformación Digital";
    @property({ type: String }) video = "https://www.youtube.com/embed/HFgmGcOLo-U";
    @property({ type: String }) fondo = "url(../images/inteligencia-artificial.png)";
    @property({ type: String }) instagram = "https://www.instagram.com/happy.crops/";
    @property({ type: String }) facebook = "https://www.facebook.com/HappyCropsChile/";
    @property({ type: String }) web = "http://happycrops.feriadesoftware.cl";
    @property({ type: Number }) counteria = 300;
    @property({ type: Number }) countertd = 24;
    @property({ type: Boolean }) btd = false;
    @property({ type: Boolean }) bia = false;

  __increment() {
      if (this.categoria == "td")
      {
        if (this.bia == false)
        {
          this.counteria += 1;
          this.bia = true;
        }
        else
        {
          this.counteria -= 1;
          this.bia = false;
        }
      }
      else
      {
        if (this.btd == false)
        {
          this.countertd += 1;
          this.btd = true;
        }
        else
        {
          this.countertd -= 1;
          this.btd = false;
        }
      }
    }


    static styles = css`
        :host {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
        }
        /*
        .fondo {
            background-image: require('../images/inteligencia-artificial.png');
        }
        */
        .filtro {
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
        .material-icons.md-search { /*iconos navbar menu a la tamaño y color*/
            border-radius: 50%;
            cursor: pointer;
        }
        .material-icons.md-search:hover { /*iconos navbar menu a la tamaño y color*/
            border-radius: 50%;
            cursor: pointer;
        }
        .flechas {
            color: black;
            font-size: 4vw;
            background-color: white;

        }
        .flechas:hover {
            color: white;
            font-size: 4vw;
            background-color: black;
        }
        .like {
            color: white;
            font-size: 2vw;
            background-color: red;
            padding: 0.3vw;
        }
        .like:hover {
            color: red;
            font-size: 2vw;
            background-color: white;
            padding: 0.3vw;
        }

        .icon {
        margin-right: 3rem;
        }
        .redes{
            margin-left: 3vw;
        }
        .btn_categoria {
            border-radius: 0px;
            background: #132e49b3;
            color:white;
            width: 18vw;
        }

    `;

    @property({ type: Boolean }) estado = false;

    _handleClick(e: any) {
        if(this.categoria == "ia") {
            this.color = "#132e49a6"; //azul
            this.color_fondo = "#132e4996"; //azul
            this.descripcion = "HappyCrops busca ayudar a los agricultores a detectar de forma temprana infecciones que podrían estar afectando a sus cultivos mediante drones, para recomendar un curso de acción sobre qué producto aplicar y dónde aplicarlo.";
            this.preempresa = "FlyBit";
            this.proyecto ="HappyCrops";
            this.titulo_categoria = "Inteligencia Artificial";
            this.video = 'https://www.youtube.com/embed/HFgmGcOLo-U';
            this.fondo = "url(../images/inteligencia-artificial.png)";
            this.instagram = "https://www.instagram.com/happy.crops/";
            this.facebook = "https://www.facebook.com/HappyCropsChile/";
            this.web = "http://happycrops.feriadesoftware.cl";
            this.categoria = "td";
        } else if(this.categoria == "td") {
            this.color = "#9B2A51a6"; //rojo
            this.color_fondo = "#9B2A5196"; //rojo
            this.descripcion = "Serivico de registro, seguimiento y gestión de la información para reuniones presenciales.";
            this.preempresa = "PandApps";
            this.proyecto ="MIP";
            this.titulo_categoria = "Transformación Digital";
            this.video = 'https://www.youtube.com/embed/zTPkE2FNuQo';
            this.fondo = "url(../images/transformacion-digital.jpg)";
            this.instagram = "https://www.instagram.com/mip_cl/";
            this.facebook = "https://www.facebook.com/meetinginprogresscl/";
            this.web = "http://mip.feriadesoftware.cl";
            this.categoria = "ia";
        }
        console.log(`Click: ${this.color}`);
    }

  render() {
    return html`


    <!--Header-->
     <link rel="stylesheet" href="../node_modules/smart-webcomponents/source/styles/smart.default.css" type="text/css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Open+Sans:wght@300&family=Roboto:ital,wght@0,100;0,300;0,400;1,900&display=swap" rel="stylesheet">
    <!--Header-->

    <!--Bootstrap-->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <!--Bootstrap-->

     <!--roboto slab-->
     <link rel="preconnect" href="https://fonts.gstatic.com">
     <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet">
     <!--roboto-->
     <link rel="preconnect" href="https://fonts.gstatic.com">
     <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">


    <div class="filtro" style=" background: ${this.fondo}; background-size: cover;"></div>
    <!--<div  class="filtro"  style=" background: ${this.color_fondo};"></div> -->

    <my-navbar></my-navbar>
    <div class="col">
        <div class="row" style="margin-bottom: 1vw;">
            <div class="col-lg-1">
            </div>
            <div class="col" style=" padding-left: 0;">
                <Select class="btn btn_categoria" style="background:${this.color};" @change="${this._handleClick}">
                   <option value="1">${this.titulo_IA}</option>
                   <option value="2" >${this.titulo_TD} </option>
                </select>
            </div>
        </div>

        <div class="row" >
            <div class="col-lg-1" style="margin-top: auto; margin-bottom: auto;">

                <span class="material-icons md-search flechas" @click="${this._handleClick}">navigate_before</span>
            </div>
            <div class="col-lg-10" style="background:${this.color};  padding: 0px 4rem;">

                <div class="row" style="margin: 1rem 0rem;">
                    <div class="col-lg-2 offset-lg-11">
                        <span class="material-icons md-search like"  @click=${this.__increment}>favorite</span>
                        <span style="font-family: 'Roboto'; font-size:2.5vw;">${this.categoria=="td"?this.counteria:this.countertd}</span>
                    </div>
                </div>

                <div class="row"> <!-- primera seccion -->
                    <ul class="col ml-auto"> <!-- izqiierda-->
                        <div style="font-family: 'Roboto', sans-serif; font-size: 1.5vw; font-weight: 300;">
                            ${this.preempresa}
                        </div>
                        <div style="font-family: 'Roboto', sans-serif; font-size: 4vw; font-weight: 900;">
                            ${this.proyecto}
                        </div>
                        <div style="font-family: 'Roboto', sans-serif; font-size: 1.5vw; font-weight: 400; padding-right: 1vw;">
                            ${this.descripcion}
                        </div>
                    </ul>
                    <ul class="col mr-auto"> <!--derecha-->
                        <div>
                            <iframe width="560" height="315" src="${this.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </ul>
                </div>
                <div class="row align-items-start">
                    <div class="col-8">
                        <div class="redes" style="padding-bottom:2rem; display: flex; justify-content: left;">
                            <a href="${this.instagram}" target="_blank" class="icon" title="Instagram" onmouseover="mostrar('Agregar instagram del proyecto')" onmouseout="quitar()"><i class="fab fa-instagram" style="font-size: 3rem; width: 4rem; height: 4rem; padding: 0.55rem; padding-left: 0.65rem; color: white;background: black; border-radius: 50%; " ></i></a>
                            <a href="${this.facebook}" target="_blank" class="icon" title="Facebook" onmouseover="mostrar('Agregar facebook del proyecto')" onmouseout="quitar()" > <i class="fab fa-facebook" style="padding-top:1px; padding-left:1px;font-size:4rem; width: 4.1rem; height: 4.1rem; color: black; background: white; border-radius: 50%;  "></i></a>
                            <a href="${this.web}" target="_blank" class="icon" title="Página web" onmouseover="mostrar('Agregar pagina web del proyecto')" onmouseout="quitar()" ><i class="far fa-at" style=" width: 4rem; height: 4rem;padding: 0.8rem; color: white;background: black; border-radius: 50%; font-size: 2.5rem;"></i></a>
                        </div>
                    </div>
                </div>
            </div>
          <div class="col-lg-1" style="margin-top: auto; margin-bottom: auto;">
            <span class="material-icons md-search flechas" @click="${this._handleClick}">navigate_next</span>
          </div>
        </div>

    </div>
    `;
  }
}


window.customElements.define('my-proyecto', MyProyecto);
