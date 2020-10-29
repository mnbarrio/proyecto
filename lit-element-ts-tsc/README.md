# Tutorial para desarrollar usando Web Components

En este breve tutorial se presentan las ideas fundamentales para utilizar Web Components en vuestros proyectos. En concreto utilizaremos `lit-element` en sustitución del habitual `html-element` en nuestros scripts. `lit-element` es una clase que se utiliza para crear Web Components y que apenas pesa 30KB. 

## Instalando los componentes básicos

Lo primero que necesitamos es instalar NodeJS, así que utilizando vuestro gestor de aplciaciones favorito debéis instalarlo. 

Y después, empezaremos este tutorial clonando este repositorio:

`git clone https://github.com/modernweb-dev/example-projects`

y accediendo al directorio `lit-element-ts-tsc`

`cd lit-element-ts-tsc`

He de resaltar que el proyecto original lo podéis encontrar en `https://github.com/modernweb-dev/example-projects` con varios ejemplos más. 


El siguiente comando instala un servidor de desarrollo en nuestra carpeta. 

`npm i --save-dev @web/dev-server`

Mediante el comando `npm i` instalaréis todas las dependencias necesarias para ejecutar el proyecto demo.

En este tutorial usaré `TypeScript` porque a estas alturas de la carrera todos conocemos las ventajas de los lenguajes tipeados. Para compilar vuestro proyecto `TypeScript` simplemente tenéis que utilizar el comando `tsc` en el directorio `lit-element-ts-tsc`

Para ejecutar el servidor web de desarrollo hay varias formas, desde tener instalado en vuestro editor de código favorito un servidor web como el *Live Server* en *Visual Studio Code*, o ejecutar `npm run start`. Para este último comando recordad que `start` tiene que estar definido en el `package.json` del proyecto:

```json
"scripts": {
    "start": "node your-script.js"
}
```
o también dependiendo de la configuración concreta:
```json
{
  "scripts": {
    "start": "web-dev-server --app-index index.html --node-resolve --watch --open"
  }
}
```

## Utilizando web components en nuestra aplicación

Después de ejecutar el comando se abrirá una nueva página en vuestro navegador predeterminado, mostrando un botón y un contador. Vamos a examinar un poco más en detalle lo que sucede. Para ello abriremos el archivo `MyElement.ts` donde vemos el siguiente código:

```JavaScript
import { html, css, LitElement, property } from 'lit-element';

export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--my-element-text-color, #000);
    }
  `;

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
```

Aquí he de destacar la primera línea donde importamos los paquetes necesarios para utilizar `lit-element` en la siguiente línea creamos la clase que exportaremos e incluiremos en nuestro código `html`. Esta clase extiende a la clase `lit-element`. Dentro de la clase, utilizamos la función `render` que retorna el `html` con el elemento botón y su evento asociado.

Si vamos al código `html` en nuestro navegador veremos lo siguiente:

```
<my-element></my-element>
```

que es cómo se ejecuta nuestro código. Expandiendo ese código veremos el `shadow-root` del elemento, el botón y el texto.


## Extendiendo el componente anterior con nuevos componentes

Ahora lo que vamos a hacer es extender este componente con alguno de los elementos que hemos visto en clase. En [este repositorio](`https://github.com/web-padawan/awesome-lit-html) hay varios enlaces a recursos relacionados con `lit-element`, entre otros los componentes de Material Design de Google o la implementación de Adobe de `lit-element`, por decir dos al azar.

Yo voy a usar [Material Design](https://github.com/material-components/material-components-web-components) en este ejemplo. Siguiendo las instrucciones del repo instalamos los componentes en nuestro proyecto usando el comando 
```npm install @material/mwc-button @material/mwc-list```, lo importamos:
```JavaScript
import '@material/mwc-button'
import '@material/mwc-list/mwc-list.js';
import '@material/mwc-list/mwc-list-item.js';
```

y lo usamos en nuestra función render.

```html
<mwc-button @click=${this.__increment}>increment</mwc-button>

<mwc-list>
  <mwc-list-item>Item 0</mwc-list-item>
  <mwc-list-item>Item 1</mwc-list-item>
  <mwc-list-item>Item 2</mwc-list-item>
  <mwc-list-item>Item 3</mwc-list-item>
</mwc-list>
```

Compilamos usando `tsc`

Si preferimos usar otra biblioteca de componentes, simplemente la importamos y la utilizamos. Por ejemplo podemos usar Kor-UI `npm install @kor-ui/kor --save` y mirando la [documentación](https://kor-ui.com/introduction/welcome) podemos hacer lo mismo pero con un diseño totalmente distinto.