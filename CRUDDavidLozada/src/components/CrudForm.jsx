import React, { useEffect, useState } from 'react';     //llamamos use

const initalForm = {                /*se inicializa Form*/
    name: {},
    descripcion: {},
    id: null,
}


const CrudForm = (createData, updateData, dataToEdit, setDataToEdit) => {       /*destructuro propiedades create, up, data y setData*/

    const [form, setForm] = useState ({initalForm})     /* se trae initialForm*/
                                        /*EVENTOS*/
    useEffect(()=>{
        if(dataToEdit){
            setForm(dataToEdit);
        } else {
            setForm(initalForm);
        }
    }, [dataToEdit]);
    
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };      /*controla cambios formulario*/
    
    const handleSubmit = (e) => {
        e.preventDefault();         /*no se autoprocese formulario*/

        if(!form.name || !form.descripcion){      /* para que formulario no este vacio */
           alert("Datos incompletos");
            return;
        }

        if(form.id === null){   /* si id en formulario nulo => se crea data en formulario*/
            createData(form);
         } 
         
        else {
            updateData(form);   /* sino actualiza datos en formulario */
         }
         handleReset();
        
    };      /*controlar registro formulario y limpieza posterior*/
        
    const handleReset = (e) => {
        setForm(initalForm);
        setDataToEdit(null);
    };      /*controlar limpieza formulario*/
    
     return (
        <div>
          <h3>Agregar</h3>
          <form onSubmit={handleSubmit}>                               
                <input type="text" name='name'placeholder='Nombre' onChange={handleChange} value = {form.name}/>    {/*asignamos evento y valor*/}
                <input type="text" name='descripcion'placeholder='Descripcion' onChange={handleChange} value = {form.descripcion} />  {/*asignamos evento y valor*/}
                <input type="submit" value="Registrar" />
                <input type="reset" value= "Borrar" onClick={handleReset}/>         {/*asignamos evento*/} 
          </form>
        </div>
        );
    };


export default CrudForm;
