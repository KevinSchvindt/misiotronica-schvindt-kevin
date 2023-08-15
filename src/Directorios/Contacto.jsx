import React from 'react'
import Navegacion from '../Componentes/Navegacion'
import Formulario from '../Componentes/Formulario'
import UBICACION from '../Imagenes/UBICACION.png'
import './Contacto.css'

const Contacto = () => {
  return (
    <div className='contacto'>
      <Navegacion/>
      <Formulario/>
      <img src={UBICACION} alt="Ubicacion" />
      <p>Nos podes encontrar en:</p>
      <h1>Entre Ríos 1650, Posadas - Misiones</h1>
    </div>


  )
}

export default Contacto
