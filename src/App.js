import Barra from './Componentes/Barra';
import { ReactDOM } from 'react';
import './App.css';
import Burguer from './Componentes/Burguer';
import Productos from './Componentes/Productos';

function App() {
  return (
    <div className="App">  
        <Barra/>
        <Burguer/>
        <Productos
    titulo="Cable de telefono"
    descripcion="cable para telefono"
    precio= "$400"/>
        </div>
  );
}

export default App;
