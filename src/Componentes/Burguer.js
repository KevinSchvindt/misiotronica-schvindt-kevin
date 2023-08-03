import React from 'react'
import Inicio from '../Componentes/Inicio'

function Burguer() {
  return (
    <div>
      <ul>
        <li>
            <a href='#'>Inicio</a>
            <Inicio/>
        </li>
        <li>
            <a href='#'>Acerca de Nosotros</a>
        </li>
        <li>
            <a href='#'>Tienda On-line</a>
        </li>
        <li>
            <a href='#'>Contactanos</a>
        </li>
      </ul>
    </div>
  )
}

export default Burguer

