import React, { Fragment } from 'react'
import NavBar from './NavBar'
//Las funciones siempre reciben como unico parámetro los props.
//Para que un componente muestre un children declarado en el momento en el que
//el componente es renderizado (ver donde está Layout en App.js). El componente
//debe recibir como props el childre, y luego retornarlo inmediatamente para mostrarlo
function Layout(props) {
  //Siempre hay que recordar retornar un solo elemento dentro de los componentes. Así sea
  //un div únicamente, pero que funcione como contenedor. Esto puede ocasionar que regresmos
  //más divs de los necesarios. Para eso existe un componente llamado 'Fragment' de React
  //que permite eliminar esos divs innecesarios.
  return (
    <Fragment>
      <NavBar />
      {props.children}
    </Fragment>
  )
}

export default Layout