import { useState,ChangeEvent  } from 'react'
import './App.css'

type typedatos= {
  name:string,
  apellido:string
}


function App():JSX.Element {
  const [datos,setdatos]= useState<typedatos>({name:'',apellido:''})
  const [personas, setPersonas] = useState<typedatos[]>([]);

const Cambio =(e:ChangeEvent<HTMLInputElement>):void => {
  
  setdatos({...datos,
  [e.target.id]: e.target.value})
    
    

  }

 const Estados: React.FC<React.FormEvent> = (e) => { //React.FC Manjeador de estados
  setPersonas([...personas,datos])   
  console.log(datos)                                       // <React> Indicamos que tipo de estado es
  e.preventDefault();

  return (
  <>
  </>
  );
};



  return (
    
     <>
    <h1>Crud React</h1>
    <form onSubmit={Estados}>
  <table>
    <thead>
    <tr>
      
      <td><label htmlFor="name">Nombre:</label><input type="text" id='name' value={datos.name} onChange={Cambio}/></td>
      <td><label htmlFor="Apellido">Apellido:</label><input type="text" id='apellido' value={datos.apellido} onChange={Cambio}/></td>
      <td><button className='botom' type='submit'>Agregar</button></td>
      
    </tr>
  e
  
  </thead>

  <tbody>
 
  </tbody>
  </table>
  </form>
      </>
  )
}

export default App
