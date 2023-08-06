import React from 'react'
import { Outlet, Link } from 'react-router-dom'


function Burguer() {
  return (
    <>
    <nav>
      <ul>
        <li>
            <Link to="/">Inicio</Link>
        </li>
        <li>
            <Link to="/Venta">Tienda On-line</Link>
        </li>
        <li>
            <Link to="/AcercaDeNosotros">Acerca de Nosotros</Link>
        </li>
        <li>
            <Link to="/Contacto">Contactanos</Link>
        </li>
      </ul>
    </nav>

  <Outlet />
  </>
  )
}

export default Burguer

