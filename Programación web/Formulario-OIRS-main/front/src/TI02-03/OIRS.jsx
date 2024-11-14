import '../App.css';
import React, { useState } from 'react';
import DatosSolicitante from './DatosSolicitante';
import useFetch from '../hooks/useFetch'
import Vista_admin from './vista-admin'

const App = ({darkMode}) => {
  const [admin, setAdmin] = useState(false);

  window.onload = function() {
    console.log("la pagina esta funcionando");
  };
  const handleSetAdmin =()=>{
    setAdmin(!admin)
  }
  // Definición del estado en el componente padre
  const { datas, loading, error } = useFetch("http://localhost:8800/api/formulario");
  console.log(datas)
  const [data, setData] = useState({
    tipoPersona: '1', // 1 es para Persona Natural, 2 es para Persona juridica/institucion
    nacionalidad: 'chileno', // Valor por defecto
    PRAIS: 'Si',// puede ser si o no
    RUT_Natural:''
  });
  const verificar=(event) =>{
    event.preventDefault()
    alert(JSON.stringify(data, null, 2))
  }
  return (
    <div>
      
      
      <h1 className="text-2xl mb-4 text-[#6ec1e4]">Formulario de Solicitante</h1>
      {/* Pasar data y setData como props al componente hijo */}
      <DatosSolicitante data={data} setData={setData} darkMode={darkMode} />
    </div>
  );
};

export default App;
