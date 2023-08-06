import React from 'react'
import err404 from "../Imagenes/err404.png"
import Burguer from '../Componentes/Burguer'

const Error404 = () => {
  return (
    <div>
      <Burguer/>
      <img src={err404} alt="err404" />
    </div>
  )
}

export default Error404
