import React from 'react'
import Burguer from '../Componentes/Burguer'
import FONDO from '../Imagenes/FONDO.jpg'
 
const Inicio = () => {
  return (
    <div>
      <Burguer/>
      <img src={FONDO} alt="FONDO" />
    </div>
  )
}

export default Inicio
