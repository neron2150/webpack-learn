'use strict'
import externalFunc from './another.js';

externalFunc('hello, i\'m external');
const element = document.getElementById('element');
console.log(element);
element.innerHTML = 'Hello, world!';
element.style = '100px';