import React from "react";
import TableRow from './tableRow';
import { useState , useEffect } from "react";

const Table =(data, darkMode)=>{
    const [searchTerm, setSearchTerm] = useState('');
    const [solicitudes, setSolicitudes] = useState(data);
    const headers =["ID", "RUT", "fecha creacion"]
    /*const filteredData = solicitudes.filter((datos) =>
        Object.values(datos).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );*/
      
  return(
        <div>
        <tr style={{ width: '50%', margin: '0 auto', textAlign:'center;'}}>
      <td>
          <input type="text" 
          
          style={{ color: darkMode ? '#E0E0E0' : '#000', backgroundColor: darkMode ? '#1c1f22' : '#fff' }}>

          </input>
          
      </td>
      <td>
          <button className="bg-[#046bd2] text-white py-2 px-4 rounded hover:bg-[#ADB6BE]" >Buscar</button>
      </td>
      </tr>
        <table border="1">
          <thead>
            <tr>
              {headers.map((dato)=>(<th>{dato}</th>))}
            </tr>
          </thead>
          <tbody>
            {solicitudes.data.map((datos) => (
              <TableRow datos={datos} />
            ))
            }
          </tbody>
        </table>
        </div>
  );

};

export default Table;