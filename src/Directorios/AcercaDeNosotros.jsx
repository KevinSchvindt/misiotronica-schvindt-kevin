import React from 'react'
import Navegacion from '../Componentes/Navegacion'
import './AcercaDeNosotros.css'

const AcercaDeNosotros = () => {
  return (
    <>      <Navegacion/>
    <div className='AcercaDeNosotros'>

      <h1>Bienvenidos a Misiotrónica</h1>
      <p>Somos una empresa dedicada a la venta de materiales electrónicos desde hace
        más de 20 años con presencia en el rubro.
      </p>
      <p>Nuestra historia comienza en el año 1996 cuando nuestro fundador inicia el proyecto 
        en un pequeño puesto dentro del mercado central, vendiendo para los transeutes 
        que por allí pasaban.
      </p>
      <p>Con el pasar del tiempo, varias empresas del sector empezaron a confiar en nuestra calidad,
        nuestros productos y la forma de atender que tenemos, lo cual nos llevo a la posición que hoy 
        día compartimos</p>
        <p>Creemos firmemente que nuestra empresa se encuentra en un constante crecimiento, con miras al futuro
          y centrandonos en la atencion a nuestros clientes.
        </p>
        <h2>Valores</h2>
        <ul>
          <li>GRANDEZA</li>
          <li>DEDICACION AL CLIENTE</li>
          <li>ATENCION PERSONALIZADA</li>
          <li>RAPIDA RESPUESTA</li>
          <li>SOLUCION DE PROBLEMAS</li>
        </ul>
        <h3>Mision:</h3>
        <p>Ser la empresa lider de la region en venta de insumos informáticos y electrónicos</p>
        <h3>Vision:</h3>
        <p>Convertirnos en la primer empresa local en exportar al Paraguay</p>
        
    </div>
    </>
  )
}

export default AcercaDeNosotros
