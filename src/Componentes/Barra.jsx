import React, { useState } from 'react'
import './barra.css'

const Barra = () => {
  const [search, setsearch] = useState ("");

return (
  <form>
    <div className='Barra'>
      <input
      tipe = "text"
      name = "search"
      autocomplete = "off"
      placeholder='example'
      value={search}
      onChange={(ev) => setsearch(ev.target.value)}>
      </input>
      <button tipe = "submit" className='boton'>
        <i class = "bx bx-search"></i>
      </button>
    </div>
  </form>
  )
}

export default Barra
