import './App.css'
import ShowDatos from './components' 
import { useState } from 'react';



function App() {
  const [datos, setdatos] = useState({uid:crypto.randomUUID(), name: '', apellido: '' })
  const [personas, setPersonas] = useState([]);

  const Cambio = (e) => {
    const {id, value} = e.target
    setdatos({...datos,
      uid:crypto.randomUUID(),
      [id]:value
    })

  }

  const Estados = (e) => { //React.FC Manjeador de estados                                      // <React> Indicamos que tipo de estado es
    e.preventDefault();
  };


 function CreateEelement(){
  setPersonas([...personas, datos])
  setdatos({ uid: crypto.randomUUID(), name: '', apellido: '' })

 }


function onUpdate({uid,name,apellido}){
  let tem = [...personas]
  const datos = tem.find(ele => ele.uid === uid)
  datos.name = name
  datos.apellido = apellido

  setPersonas([...tem])


}

function onDelete(uid){
  let temp = personas.filter(ele => ele.uid !== uid)


  setPersonas([...temp])
}


  return (

    <>
      <h1>Crud React</h1>
      <form onSubmit={Estados}>
        <table>
        
          <thead>
            <tr>
            
              <td >
              <label htmlFor="name"  >Nombre:</label>
              <input type="text" id='name' value={datos.name} onChange={Cambio}  />
              </td>

              <td>
              <label htmlFor="Apellido">Apellido:</label>
              <input type="text" id='apellido' value={datos.apellido} onChange={Cambio} />
              </td>

              <td>
                <input type="Submit" onClick={CreateEelement} value='Crear' className='botom' />
              </td>
            </tr>


            
          </thead>
          
      


        </table>
        </form>

        {personas.map(item=>{

          return(<ShowDatos 
            key={item.uid}
            name={item.name}
            apellido={item.apellido}
            uid={item.uid}
            onUpdate={onUpdate}
            onDelete={onDelete}
            />)

        })
        
        } 


    </>
  )
}

export default App
