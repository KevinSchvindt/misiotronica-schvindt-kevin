import React, { useState } from 'react'
import './BarradeBusqueda.css'

const BarradeBusqueda = () => {
  const [search, setsearch] = useState ("");

return (
  <form>
    <div className='Barra'>
      <input
      tipe = "text"
      className = "search"
      autoComplete = "off"
      placeholder= "Escribe Aquí"
      value={search}
      onChange={(ev) => setsearch(ev.target.value)}>
      </input>
      <button tipe = "submit" className='boton'>
        <p>Buscar</p>
      </button>
    </div>
  </form>
  )
}

export default BarradeBusqueda
