import { useEffect, useState } from 'react'
import './App.css'




function App() {



  let urls  = 'https://fakestoreapi.com/products'
  const [datos,setDatos]= useState([])  

  useEffect(() => {
    fetch(urls)
      .then(res => res.json())
      .then(data => setDatos(data))
      .catch((e) => console.log('Fallo api', e))
  }, [urls])

console.log(datos)

  return (
    <div className='div'>
        {datos? datos.map((e)=>{
          return(
            <div className='data' key={e.id}>
              <p>{e.title}</p>
              <img src={e.image} alt="Imagen" />
              </div>
          )
        }) : <div className='data'><p>Datos no encontrados</p></div>}
    </div>
  )
}

export default App
