import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AcercaDeNosotros from './Directorios/AcercaDeNosotros';
import Contacto from './Directorios/Contacto';
import Error404 from './Directorios/Error404';
import Inicio from './Directorios/Inicio';
import Venta from './Directorios/Venta';
import './App.css';

function App()  {
  return (
    <BrowserRouter>
        <Routes>
          
          <Route path='/' element= {<Inicio/>} />
          <Route path='/Venta' element= {<Venta/>} />
          <Route path='/AcercaDeNosotros' element= {<AcercaDeNosotros/>} />
          <Route path='/Contacto' element= {<Contacto/>} />
          <Route path='*' element= {<Error404/>} />
        </Routes>
    </BrowserRouter>

        
  );
}

export default App;
