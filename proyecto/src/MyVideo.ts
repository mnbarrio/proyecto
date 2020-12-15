import { html, css, LitElement, property } from 'lit-element';

export class MyVideo extends LitElement {
  static styles = css`
    :host {
        display: flex;
        padding: 25px;
        justify-content:center;
        text-align: center;
    }
    .texto {
        display: flex;
        color:black;
        position:absolute;
    }
    .video { 
        position: relative;
        height: 515px; 
        width: 860px; 
        overflow: hidden;
    }
    .video img { 
        position: absolute; 
        display: block; 
        top: 0; 
        left: 0; 
        height:100%; 
        width:100%; 
        cursor: pointer;  
        opacity:0.5;
        border-radius: 15px;
        overflow: hidden; 
    }
    .video iframe { 
        position: absolute; 
        top: 0; 
        left: 0; 
        height: 100%; 
        width:100%; 
        border-radius: 15px;
        overflow: hidden; 
    }

        
  `;
    @property({ type: Boolean }) estado = false;

    _handleClick(e: any) {
            
        if(this.estado) {
            this.estado = false;
        } else {
            this.estado = true;
        }
        console.log(`Click: ${e}`);
    }

  render() {
    return html`
    
    <div class="video" @click=${this._handleClick}>
        
        
        <iframe class="" src="https://www.youtube-nocookie.com/embed/xZYEAqQC6Ng?controls=0&rel=0&showinfo=0&autoplay=1" frameborder="0" allow="accelerometer;  autoplay;  encrypted-media; gyroscope;" allowfullscreen></iframe>
        <!--<img class="" src="../images/inteligencia-artificial.png" width="560" height="315" style="display: ${this.estado == true ? css`none`: css`block`};"> -->
        
        <!--<div class="texto ">
            <span > Esta es la descripción </span>
        </div> -->
    </div>
    `;
  }
}


window.customElements.define('my-video', MyVideo);