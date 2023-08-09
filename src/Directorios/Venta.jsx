import React from 'react'
import Productos from '../Componentes/Productos'
import Burguer from '../Componentes/Burguer'
import Barra from '../Componentes/Barra'
import ProductosLista from '../BaseDatos/ProductosLista'

const Venta = () => {
  return (
    <div>
            <Burguer/>
           <Barra/>
           {ProductosLista.map(function (elemento){
            return (<Productos 
              imagen={elemento.imagen}
              precio={elemento.precio}
              nombre={elemento.nombre}
              descripccion={elemento.descripccion}
              />);})};
    </div>
   
  )
}

export default Venta

