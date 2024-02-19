import React, { Component } from 'react';
import CrudTableRow from './CrudTableRow';

const CrudTable = ({data, setDataToEDit, deleteData}) => {
    
        return (
            <div>
                <h3>TABLA DE DATOS</h3>
                <table>
                    <thead>
                        <tr>                        {/*table road / data*/}
                            <th>NOMBRE</th>
                            <th>DESCRIPCION</th>
                            <th>ACCIONES</th>
                        </tr>       
                    </thead>
                    <tbody>
                        {data.length === 0 ? (

                        <tr> 
                          <td colSpan="3">Sin Datos</td>
                          </tr>
                          ) : (
                            data.map(el => 
                            <CrudTableRow 
                              key = {el.id} 
                              el = {el} 
                              setDataToEDit={setDataToEDit}
                              deleteData={deleteData} />)  /*id de cada*/ 
                        )}
                    </tbody>
                </table>
            </div>
        );
    }


export default CrudTable;
