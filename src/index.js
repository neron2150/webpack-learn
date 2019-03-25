'use strict'
import externalFunc from './another.js';

externalFunc('hello, i\'m external');
const element = document.getElementById('element');
element.innerHTML = 'Hello, world!';