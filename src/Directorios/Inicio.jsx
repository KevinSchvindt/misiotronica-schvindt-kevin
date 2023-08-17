import React from 'react'
import Navegacion from '../Componentes/Navegacion'
import Redes from '../Componentes/Redes'
import './Inicio.css'


 
const Inicio = () => {
  return (
    <div className='Inicio'>
      <Navegacion/>
      <h1>BIENVENIDOS</h1>
      <Redes/>
     
    </div>
  )
}

export default Inicio
