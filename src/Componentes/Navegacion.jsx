import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import LOGO from '../Imagenes/LOGO.jpg'
import './Navegacion.css'


function Navegacion() {

  
  return (
    <>
    <div className='Navegacion'>
      <img src={LOGO} alt="LOGO" />
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
    <h1>Misiotrónica</h1>
    </div>

  <Outlet />
  </>
  )
}

export default Navegacion

