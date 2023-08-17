import React from 'react'
import err404 from "../Imagenes/err404.png"
import Navegacion from '../Componentes/Navegacion'
import './Error404.css'


const Error404 = () => {
  return (
    <div className='Error404'>
      <Navegacion/>
      <img src={err404} className='err404' alt= {'whidt:100%'}/>
        <h1>LO SENTIMOS PERO LA PAGINA NO EXISTE</h1>
    </div>
  )
}

export default Error404
