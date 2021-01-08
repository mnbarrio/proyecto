import { html, css, LitElement, property } from 'lit-element';
import {MyCard} from '../src/MyCard';

export class MyIntegrantes extends LitElement {
    listas: any;
    //@property({ type: Array }) lista = new Array<MyCard>();
    static get properties() { 
        return { 
            listas: { 
                type: Array,
                hasChanged(newVal: any,oldVal: any) {
                    console.log(newVal);
                    if( newVal != oldVal ){
                        return true;
                    } else {
                        return false;
                    }
                }
            }       
        };
      }
    
      constructor() {
        super();
        this.listas =  [];
    }
   
  
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
      .row {
      border-top: 1px solid gray ;
      padding: 15px;
    }
    a {
        color: black;
    }
    
    .integrantes {
        overflow: hidden;
        display: inline-flex;
    }
    .agregar-card {
        display: block;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: auto;
        margin-bottom: auto;
    }
    .agregar-card > i {
        font-size: 5rem;
    }
    .card-body > i {
        background: #ffc0c0;
        padding:1.5rem;
        border-radius: 50%;
        font-size: 3rem;
        
    }
    .card-body {
        text-align: center;
    }
    .card-title {
        
        margin-top: 10px;
        font-size: 1.5rem;
    }
    .card-text {
        font-size: 1rem;
    }
    .card {
        background: rgb(170, 169, 169); 
        width: 10rem;
        height: 16rem;
        margin: 2vw;
    }
    `}

    attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
        console.log('attribute change: ', name, newVal);
        super.attributeChangedCallback(name, oldVal, newVal);
    }

    changeProperties() {
        this.listas.push(new MyCard("piter","rut"));
        this.listas.update
    }

    
    
    _addCard(){
        let emps = new Array<MyCard>();
        this.listas.push(new MyCard("piter","rut"));
        this.listas.map((e: any) => {
            console.log(e)
        });
        console.log("FIN ");
        console.log(this.listas.hasChanged);


        /*
        for (let cards of emps) {
            //console.log(cards.myNombre);
        }

        this.lista.forEach(emps => {
            this.lista.push(emps);
        });

        console.log(this.lista);
        */

    }
    
    render() {
      return html`
        <!--header -->
        <link rel="stylesheet" href="../node_modules/smart-webcomponents/source/styles/smart.default.css" type="text/css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Open+Sans:wght@300&family=Roboto:ital,wght@0,100;0,300;0,400;1,900&display=swap" rel="stylesheet">


        <!--Bootstrap-->
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <!--Bootstrap-->
        <!--fontawesome-->
        <script src="https://use.fontawesome.com/e471b7b639.js"></script>
        <!--fontawesome-->
        <div class="row ">
            ${
                this.listas.map((item: MyCard) => html`<span> ${item.getNombre}</span>`)
            }
            ${this.listas.map((item: { getNombre: string; getRut: string; }) => 
                    {
                     return html`
                    <div class="card">
                        <div class="card-body ">
                            <i class="fa fa-users"></i>
                            <h5 class="card-title">${item.getNombre}</h5>
                            <p class="card-text">${item.getRut}</p>
                        </div>
                    </div>
                    `;
                })
                }
            
            <div class="card" title="Agregar nuevo integrante" @click=${this._addCard}>
                <div class="agregar-card">
                    <i class="fa fa-plus"></i>
                </div>
            </div>
        </div>
      `;}
  }
  
  window.customElements.define('my-integrantes', MyIntegrantes);