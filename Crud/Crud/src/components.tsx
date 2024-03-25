import { useState } from "react";
import { ChangeEvent, FormEvent } from 'react'
import { typedatos } from "./App";




function ShowDatos(persona:typedatos){
const [newValue,setNewValue] = useState({name:persona.name,apellido:persona.apellido})
const [isEdit,setEdit] = useState(false)

function Update(){
    setEdit(false)
}



function datos(e: ChangeEvent<HTMLInputElement>): void {
    const {id,value} = e.target
    setNewValue({...newValue,
        [id]:value})

        console.log(newValue)
        

}

const form = (e: FormEvent<HTMLFormElement>): void => { //React.FC Manjeador de estados                                      // <React> Indicamos que tipo de estado es
    console.log('Formulario')
    e.preventDefault();
  };





return (
    <>
    { isEdit ? <form onSubmit={form}>

        <table>
            <tbody>
        <tr>
       
        <td><label >Nombre</label><input id="name" type="text"  value={newValue.name} onChange={datos} /></td>
        <td><label >Apellido</label><input id="apellido" type="text"  value={newValue.apellido} onChange={datos} /></td>
        <td> <input type="Submit" onClick={Update}  /></td>
        
        </tr>
        </tbody>
        </table>

        </form>
    :  
           <table key={persona.uid}>
            <tbody>
           <tr >           
           <td><label >{persona.name}</label></td>
           <td><label >{persona.apellido}</label></td>
           <td><button className='botom' >eliminar</button><button onClick={()=> setEdit(true)}>Editar</button></td>
           </tr>
           </tbody>
           </table>
           
         
 }
</>
)
}

export default ShowDatos