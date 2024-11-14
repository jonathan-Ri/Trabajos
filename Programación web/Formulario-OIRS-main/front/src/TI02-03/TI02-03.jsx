import '../App.css';
import React, { useState } from 'react';
import DatosSolicitante from './DatosSolicitante';
import useFetch from '../hooks/useFetch'
import Vista_admin from './vista-admin'
import Oirs from './OIRS'

const App = ({darkMode}) => {
    const [admin, setAdmin] = useState(false);

  
    window.onload = function() {
      console.log("la pagina esta funcionando");
    };
    const handleSetAdmin =()=>{
      setAdmin(!admin)
    }
    
    
    return (
      <div>
        <button className="bg-[#046bd2] text-white py-2 px-4 rounded hover:bg-[#ADB6BE]" onClick={handleSetAdmin}>vista admin</button>
        {admin? <Vista_admin></Vista_admin>:<Oirs></Oirs>}
        
      </div>
    );
  };
  
  export default App;
  
