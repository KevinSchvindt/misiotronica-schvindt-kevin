import React from 'react'
import './productos.css'



 
function Productos(props) {
    return (
        <div className='productos'>
            <img src={props.imagen} alt=""/>
            <h2 className='precio'>{props.precio}</h2>
            <h1>{props.nombre}</h1>
            <p>{props.descripcion}</p>
            <i className ="bx bx-cart-add bx-md" ></i>
        </div>
    );
};

export default Productos
