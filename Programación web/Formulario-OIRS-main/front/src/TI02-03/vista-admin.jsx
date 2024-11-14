import React, { useState , useEffect} from 'react';
import Table from './Table';

// Componente para subir múltiples archivos
const Vista_admin = ({darkMode}) => {
  const [solicitudes, setSolicitudes] = useState('');
  useEffect(() =>{
    const fetchData = async () => {
    try {
        const result = await fetch('http://localhost:8800/api/formulario', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const data = await result.json();
        
        setSolicitudes(data)
        console.log(solicitudes);
        
      } catch (error) {
        console.error(error);
        
      }
    };
  
  fetchData();}

  , []);



  const Datos_prueba = [
    {"rut": "13.335.618-8", "apellidoMaterno": "Loyola", "apellidoPaterno": "Aliaga", "detalles": "sucedio ayer", "email": "d.aliaga2007@gmail.com", "institucion": "clinica", "nacionalidad": "Chilena", "nombre": "Diego", "prais": false, "tipoSolicitante": "individual", "tipoSolicitud": "Sugerencia","__v": 0,"_id": "67156fa490901125350c98b6"},
    {"rut": "14.445.628-9", "apellidoMaterno": "Garcia", "apellidoPaterno": "Rodriguez", "detalles": "solicitud urgente", "email": "g.rodriguez@gmail.com", "institucion": "hospital", "nacionalidad": "Chilena", "nombre": "Gabriela", "prais": true, "tipoSolicitante": "individual", "tipoSolicitud": "Reclamo", "__v": 0,"_id": "67156fa490901125350c98b7"},
    {"rut": "15.345.638-7", "apellidoMaterno": "Perez", "apellidoPaterno": "Soto", "detalles": "documentación faltante", "email": "p.soto@outlook.com", "institucion": "fundacion", "nacionalidad": "Argentina", "nombre": "Pablo", "prais": false, "tipoSolicitante": "organizacion", "tipoSolicitud": "Solicitud", "__v": 0,"_id": "67156fa490901125350c98b8"},
    {"rut": "16.645.648-5", "apellidoMaterno": "Rojas", "apellidoPaterno": "Hernandez", "detalles": "seguimiento de caso", "email": "r.hernandez@gmail.com", "institucion": "hospital", "nacionalidad": "Peruana", "nombre": "Roberto", "prais": true, "tipoSolicitante": "individual", "tipoSolicitud": "Consulta", "__v": 0,"_id": "67156fa490901125350c98b9"},
    {"rut": "17.375.576-2", "apellidoMaterno": "Vega", "apellidoPaterno": "Martinez", "detalles": "solicitud de informacion", "email": "v.martinez@hotmail.com", "institucion": "universidad", "nacionalidad": "Chilena", "nombre": "Veronica", "prais": false, "tipoSolicitante": "organizacion", "tipoSolicitud": "Sugerencia", "__v": 0,"_id": "67156fa490901125350c98ba"},
    {"rut": "18.385.677-3", "apellidoMaterno": "Diaz", "apellidoPaterno": "Torres", "detalles": "consulta sobre beneficios", "email": "d.torres@yahoo.com", "institucion": "clinica", "nacionalidad": "Colombiana", "nombre": "Daniela", "prais": true, "tipoSolicitante": "individual", "tipoSolicitud": "Consulta", "__v": 0,"_id": "67156fa490901125350c98bb"},
    {"rut": "19.945.878-k", "apellidoMaterno": "Castillo", "apellidoPaterno": "Navarro", "detalles": "solicitud pendiente", "email": "c.navarro@gmail.com", "institucion": "hospital", "nacionalidad": "Venezolana", "nombre": "Carlos", "prais": false, "tipoSolicitante": "individual", "tipoSolicitud": "Reclamo", "__v": 0,"_id": "67156fa490901125350c98bc"}
  ]
  return (
    <div className={`p-4 rounded ${darkMode ? 'bg-[#1c1f22]' : 'bg-[#F0F5FA]'}`}>
        
        <h1 style={{ width: '50%', margin: '0 10%', textAlign:'center;', marginBottom:'3%', fontSize:'150%', marginLeft:'10%', marginRight:'10%'}}>Gestion de Solicitudes</h1>
        {solicitudes !== "" &&<Table data={Datos_prueba} darkMode={darkMode}></Table>} 
    </div>
  );
};

export default Vista_admin;
