import { useState } from "react";




function ShowDatos({name,apellido,uid, onUpdate,onDelete}){
const [newValue,setNewValue] = useState({name:name,apellido:apellido})
const [isEdit,setEdit] = useState(false)


  function handleSubmit(e) {
    e.preventDefault();
    const {name,apellido}= newValue
    console.log(uid, name,apellido)
    onUpdate({uid, name,apellido});
    setEdit(false);
  }



function datos(e) {
    const {id,value} = e.target
    setNewValue({...newValue,
        [id]:value})

        console.log(newValue)
}

function borrar(){
    onDelete(uid)
}





return (
    <>
    { isEdit ? 
    <form onSubmit={handleSubmit}>

        <table>
            <tbody>
        <tr>
       
        <td><label >Nombre</label><input id="name" type="text"  value={newValue.name} onChange={datos} /></td>
        <td><label >Apellido</label><input id="apellido" type="text"  value={newValue.apellido} onChange={datos} /></td>
        <td> <input type="Submit" value='Guardar'  /></td>
        
        </tr>
        </tbody>
        </table>

        </form>
    :  
           <table key={uid}>
            <tbody>
           <tr >           
           <td><label >{name}</label></td>
           <td><label >{apellido}</label></td>
           <td><button className='botom' onClick={borrar} >eliminar</button><button className="botom" onClick={()=> setEdit(true)}>Editar</button></td>
           </tr>
           </tbody>
           </table>
           
         
 }
</>
)
}

export default ShowDatos