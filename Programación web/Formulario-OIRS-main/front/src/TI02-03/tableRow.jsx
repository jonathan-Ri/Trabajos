import React from 'react';

const TableRow = ({datos}) => {
  return (
    <tr>
        
        <td >{datos._id}</td>
        <td >{datos.rut}</td>
        <td >{datos.email}</td>
    </tr>
  );
};

export default TableRow;