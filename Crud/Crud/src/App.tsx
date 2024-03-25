import { useState, ChangeEvent, FormEvent } from 'react'
import './App.css'
import ShowDatos from './components' 

export  type typedatos = {
  uid:`${string}-${string}-${string}-${string}-${string}`,
  name: string,
  apellido: string
}


function App(): JSX.Element {
  const [datos, setdatos] = useState<typedatos>({uid:crypto.randomUUID(), name: '', apellido: '' })
  const [personas, setPersonas] = useState<typedatos[]>([]);
  const Cambio = (e: ChangeEvent<HTMLInputElement>): void => {
    const {id, value} = e.target
    setdatos({...datos,
      uid:crypto.randomUUID(),
      [id]:value
    })

  }

  const Estados = (e: FormEvent<HTMLFormElement>): void => { //React.FC Manjeador de estados                                      // <React> Indicamos que tipo de estado es
    e.preventDefault();
  };


 function CreateEelement(){
  setPersonas([...personas, datos])
  setdatos({ uid: crypto.randomUUID(), name: '', apellido: '' })

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

        {personas.map(e=>{

          return(<ShowDatos name={e.name} apellido={e.apellido} uid={e.uid} key={e.uid} />)

        })
        
        } 


    </>
  )
}

export default App
