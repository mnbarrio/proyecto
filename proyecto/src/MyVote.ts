
import { html, css, LitElement, property } from 'lit-element';
const color = css`#f5f77e`;

 class MyVote extends LitElement {
  
    @property({ type: String }) title = 'Titulo';
    @property({ type: String }) content = 'Content ';
    @property({ type: Boolean }) estado = false;
    @property({ type: Boolean }) ticket = false;
    @property({ type: String }) color = "rgba(2,5,31,0.7)";
   
    static get styles(){
        return css`
        :host {
            display:block;
            opacity: 1;
        }
        .back {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            }
        #text_title {
            margin-bottom:1%;
            font-size: 1.5vw;
            position: relative;
            color:white;
            width: 100%;
            height: 19%;
            font-family: 'Roboto Slab', serif;
            }
        #text_content {
            position: relative;
            color:white;
            margin-top:1%;
            margin-bottom:1%;
            font-size: 1vw;
            width: 100%;
            height:fit-content;
            min-height: 50px;
            max-height: 90px;
            text-overflow: ellipsis;
            overflow: hidden;
            font-family: 'Roboto', sans-serif;
            display:inline-block;
            word-wrap: break-word;
            overflow-wrap: break-word;
            }
        #block {
            padding:1%;
            margin:1%;
            position: relative;
            width:70%;
            max-height: 150px;
            margin-right:auto;
            margin-left:auto;
            height: fit-content;
        }
        .borde{
            border: 3px solid ${color};
        }
        #borde-img {
            /*border: 2px solid #fbff07;*/
            color: yellow;
        }
        #circulo {
            position: absolute;
            top: 4px;
            right: 4px;
            width: 13px;
            height: 13px;
            margin-right:auto;
            margin-left:auto;
            -moz-border-radius: 60%;
            -webkit-border-radius: 60%;
            border-radius: 60%;
            background: black;
        }
        #cuadrado {
            position: absolute;
            top: 0px;
            right: 0px;
            width: 22px;
            height: 22px;
            background: ${color};
        }
        i {
            position: absolute;
            top: 0px;
            right: -2px;
            width: 21px;
            height: 21px;
            margin-right:auto;
            margin-left:auto;
            
        }
        
      .material-icons.md-yellow { 
          color: ${color}; 
          font-size: 12px;
          top: 5px;
          right: -5px;
        }
      `;
    } 
    _handleMouseOver(e: any) {
        if (!this.estado) {
            this.ticket = true;
        }
        console.log(`Event type: ${this.estado}`);
    }
    _handleClick(e: any) {
        
        if(this.estado) {
            this.ticket = false;
            this.estado = false;
        } else {
            this.ticket = true;
            this.estado = true;
        }
        console.log(`Click: ${e}`);
    }
    _handleMouseOut(e: any) {
        if (!this.estado) {
            this.ticket =false;
        }
        console.log(`Click: ${this.estado}`);
    }
    render() {
        return html`
        <!--roboto slab-->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet">
        <!--roboto-->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
        <!--icons-->
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

        <div id="block" class='${this.ticket ? "borde" : ""}' @mouseover="${this._handleMouseOver}" @mouseout="${this._handleMouseOut}"  @click="${this._handleClick}">
            <div class="back" style="background:${this.color == "rojo" ?  "rgba(155,42,81,0.3)" : this.color == "azul" ? "rgba(2,5,31,0.7)" : "rgba(2,5,31,0.7)"}" > </div>
            ${this.ticket ? 
                html`<div id="cuadrado"> </div>
                <div id="circulo"> </div>
                <i id='borde_img' class="material-icons md-yellow" >done</i>` 
                : 
                html``}

            <div id="text_title">${this.title}</div>
            <div id="text_content">${this.content}</div>
            
        </div>
    `;
    }
  
}

window.customElements.define('my-vote', MyVote);

