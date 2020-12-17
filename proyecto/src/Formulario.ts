import { html, css,LitElement, property } from 'lit-element';

class FormularioDesing extends LitElement {
    static get styles(){
      return css `
      * {
box-sizing:border-box;
}
body {
background:#ddd;
font-family:"Raleway";
}
.tabs {
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
width:680px;
height:360px;
padding:30px 20px;
background:#f5f5f5;
box-shadow:5px 5px 10px 5px #ccc;
overflow:hidden;
}
.tabs .tab-header {
float:left;
width:180px;
height:100%;
border-right:1px solid #ccc;
padding:50px 0px;
}
.tabs .tab-header > div {
height:50px;
line-height:50px;
font-size:16px;
font-weight:600;
color:#888;
cursor:pointer;
padding-left:10px;
}
.tabs .tab-header > div:hover,
.tabs .tab-header > div.active {
color:#00acee;
}
.tabs .tab-header div i {
display:inline-block;
margin-left:10px;
margin-right:5px;
}
.tabs .tab-content {
position:relative;
height:100%;
overflow:hidden;
}
.tabs .tab-content > div > i {
display:inline-block;
width:50px;
height:50px;
background:#555;
color:#f5f5f5;
font-size:25px;
font-weight:600;
text-align:center;
line-height:50px;
border-radius:50%;
}
.tabs .tab-content > div {
position:absolute;
text-align:center;
padding:40px 20px;
top:-200%;
transition:all 500ms ease-in-out;
}
.tabs .tab-content > div.active {
top:0px;
}

.tabs .tab-indicator {
position:absolute;
width:4px;
height:50px;
background:#00acee;
left:198px;
top:80px;
transition:all 500ms ease-in-out;
}

      `;
    }


  render() {
    
    
    return html`

    <div class="tabs">
      <div class="tab-header">
        <div class="active">
          <i class="fa fa-code"></i> Code
        </div>
        <div>
          <i class="fa fa-pencil-square"></i> About
        </div>
        <div>
          <i class="fa fa-bar-chart"></i> Services
        </div>
        <div>
          <i class="fa fa-envelope"></i> Contact
        </div>
      </div>
      <div class="tab-indicator"></div>
      <div class="tab-content">
        <div class="active">
          <i class="fa fa-code"></i>
          <h2>This is code section</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
        </div>

        <div>
          <i class="fa fa-pencil-square"></i>
          <h2>This is about section</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
        </div>

        <div>
          <i class="fa fa-bar-chart"></i>
          <h2>This is services section</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <h2>This is contact section</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
        </div>

      </div>
    </div>
    `
  }
}
window.customElements.define('my-formulario',FormularioDesing);
