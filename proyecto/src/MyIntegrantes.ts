import { html, css, LitElement, property } from 'lit-element';
import {MyCard} from '../src/MyCard';

import {repeat} from 'lit-html/directives/repeat.js';

export class MyIntegrantes extends LitElement {
    //@property({ type: Array }) listas = new Array<MyCard>();
    lista: Array<MyCard>;
    contador: number;
    idRemove: number;
    static get properties() {
        return {
            lista: {type: Array },
            contador: {type: Number},
            idRemove: {type: Number},

        }
    }
    constructor() {
        super();
        this.lista = [new MyCard("Mauricio","12312313-k",0)];
        this.contador = 1;
        this.idRemove = -1;
        
    }
  static get styles(){
    return css`
      :host {
        padding: 2%;
        font-family: 'Roboto', sans-serif;
        font-size: 1vw;
        display:block;
        position: relative;
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


    _addCard(e:any){

        //document.getElementById('id');
        this.lista.push(new MyCard("Gonzalo","19787102-4",this.contador++));
        
        this.lista.map((e: any) => {
            console.log("mapeo addcard",e.id)
        });
        
    }
    
    _remove(e: any) {
        let index = e.target.id;
        console.log(index);
        this.lista.map((e: MyCard) => {
            if(e.id == index) {
                console.log("elemento remove_ " ,e);
                this.idRemove = this.lista.indexOf(e);
            }
        });
        console.log("idRemove:",this.idRemove)
        this.lista.map((e: any) => {
            console.log("mapeo remove",e.id)
        });
        //let elementoEliminado = this.idRemove == 0 ? this.lista.shift() : this.lista.splice(this.idRemove,1);
        let elementoEliminado = this.lista.splice(this.idRemove,1);
        console.log("id eliminado",elementoEliminado[0].id);
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
                <div class="card card-block"  >
                    <div class="card-body ">
                        <h6>Agregar integrante</h6>
                        
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Nombre">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="rut" name="rut" placeholder="Rut">
                            </div>
                            <button type="button" class="btn btn-primary" @click=${this._addCard}>Agregar</button>
                        </form>
                    </div>
                </div>

    
            
                ${ this.lista == [] ?
                    html`` :

                    repeat(this.lista, (employee) => employee.id, (employee, index) => 
                    html`
                        <div class="card card-block"  >
                            <div class="card-body ">
                                <i class="fa fa-users"></i>
                                <h5 class="card-title">${employee.myNombre}</h5>
                                <p class="card-text">${employee.myRut}</p>
                                <button id="${employee.id}" type="button" class="btn btn-danger" @click=${this._remove}>Borrar</button>
                            </div>
                        </div>
                `)
            }
            </div>
            
        

      `;}
  }
  
  window.customElements.define('my-integrantes', MyIntegrantes);