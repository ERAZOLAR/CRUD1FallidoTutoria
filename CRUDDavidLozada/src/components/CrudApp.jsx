import React, { useState } from 'react';        {/*importamos useState*/}
import CrudForm from './CrudForm';              // importamos archivos Form & Table
import CrudTable from './CrudTable';

const initialDb = [
    {
        id : "1",
    name : "silvicultura",
    descripcion : "proceso agroindustrial",},
    {
        id : "2",
    name : "psicologia",
    descripcion : "introspeccion",},
    {
        id : "3",
    name : "hidroponia",
    descripcion : "sustratos",},
    {
        id : "4",
    name : "ingenieria civil",
    descripcion : "concretos y agregados",},
    {
        id : "5",
    name : "antropologia",
    descripcion : "yo y tu",},

];

const CrudApp = () => {

    const [db, setDb] = useState (initialDb);       {/*creamos db y llamamos initialDb*/}
    const [dataToEdit, setDataToEdit] =useState(null); {/* identificaciondato a editar*/}

    const createData = (data) => {
        data.id = Date.now();
        //console.log(data);
        setDb([...db, data]);   /* se crea nuevo data con fecha como id*/     
    };     /*se crea para recibir */
    
    const updateData = (data) => {}     /* se crea para actualizar*/
    
    const deleteData = (id) => {}       /*se crea para eliminar*/
    
        return (
            <div>
                <h2>CRUDD app</h2>
                <CrudForm 
                createData= {createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}/>               {/*llamamos archivo CrudForm e indicamos que cree dentro y valide y actualice actualice en formulario*/}
                <CrudTable
                data = {db}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData} />       {/*llamamos archivo CrudTable y db, verifica datos y borra*/}
            </div>
        
        
        
            
        );
    }


export default CrudApp;
