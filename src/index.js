//manera convencional de escribir elementos en JS sin React:

// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react'
import ReactDOM from 'react-dom'
import App from './js/App'
import './scss/styles.scss'
import 'bootstrap/dist/css/bootstrap.css'
import logo from './images/badge-header.svg'

const container = document.getElementById('app')

// ReactDOM.render(__qué(elemento)__, __dónde__);
ReactDOM.render(<App logo={logo} />, container)
