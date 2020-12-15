
/// <reference path="./node_modules/smart-webcomponents/source/typescript/smart.elements.d.ts" />

import {Carousel } from "smart-webcomponents/source/typescript/smart.elements";
import { html } from 'lit-element';
import {MyButton} from './src/MyButton';


window.onload = function () {
  const basePath = '../images/',
      carousel = <Carousel>document.querySelector('smart-carousel');

  carousel.dataSource = generateDataSource(3);

  function generateDataSource(items: any) {
      const dataSource = Array(items).fill({});

      dataSource.forEach((element, index) => dataSource[index] = {
          
          image: `${basePath}carousel-medium-${index + 1}.jpg`,
          label: 'Slide ' + index,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. _Mauris eget nisi ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.In diam nisi, congue in leo quis, sodales pharetra elit.Sed eu facilisis lectus.Sed eu facilisis lectus. In diam nisi, congue in leo quis, sodales pharetra elit.Sed eu facilisis lectus.' + index,
          HTMLContent: html`<my-button></my-button>`   
        });
      return dataSource;
  }
}
