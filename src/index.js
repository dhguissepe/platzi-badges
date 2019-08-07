//manera convencional de escribir elementos en JS sin React:

// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react'
import ReactDOM from 'react-dom'
import App from './js/App.js'
import './scss/styles.scss'
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('app')

// ReactDOM.render(__qué(elemento)__, __dónde__);
ReactDOM.render(<App />, container)
