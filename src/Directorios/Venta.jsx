import React from 'react'
import Productos from '../Componentes/Productos'
import Navegacion from '../Componentes/Navegacion'
import BarradeBusqueda from '../Componentes/BarradeBusqueda'
import ProductosLista from '../BaseDatos/ProductosLista'
import './Venta.css'

const Venta = () => {
  return (
    <>            <Navegacion/>
        <div className='Venta'>
           <BarradeBusqueda/>
           {ProductosLista.map(function (elemento){
            return (
            <li >
            <Productos 
              imagen= {elemento.imagen}
              precio={elemento.precio}
              nombre={elemento.nombre}
              descripcion={elemento.descripcion}
              /></li>);})};
    </div>
    </>
   
  )
}

export default Venta

