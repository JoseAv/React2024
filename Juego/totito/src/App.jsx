import { useState } from 'react'
import './App.css'


function App() {
const Turnos= {
  X:'X',
  O:'O'
}

const Win = [
  {a:0,b:1,c:2},
  {a:3,b:4,c:5},
  {a:6,b:7,c:8},
  {a:0,b:3,c:6},
  {a:1,b:4,c:7},
  {a:2,b:5,c:8},
  {a:0,b:4,c:8},
  {a:2,b:4,c:6},
]


const [turno , setTurno]= useState(Turnos.X)
const [board,setBoard] = useState(Array(9).fill(null))
const [winner , setWinner] = useState(false)
const [showWinner, setShowWinner] = useState('Empate')

function ChangeTurn(index){
  let newBoard = [...board]
  if(winner === true){return}
  if(newBoard[index] !== null){return}



  turno === Turnos.X? newBoard[index]= Turnos.X: newBoard[index]= Turnos.O
  turno === Turnos.X? setTurno(Turnos.O): setTurno(Turnos.X)
  console.log(newBoard)

  setBoard([...newBoard])
  Winner(newBoard)
  

}

function Winner(newBoard){
  
  console.log('Seguir aqui')
 Win.forEach((e) => {
 if(newBoard[e.a] === Turnos.X && newBoard[e.b] === Turnos.X && newBoard[e.c] === Turnos.X ){
  setWinner(true)
  setShowWinner(Turnos.X)
 }else if(newBoard[e.a] === Turnos.O && newBoard[e.b] === Turnos.O && newBoard[e.c] === Turnos.O ){
  setWinner(true)
  setShowWinner(Turnos.O)
 }

 let Probar = newBoard.find(e => e === null)
 if(Probar!== null)  setWinner(true)


})
}

function Reset(){
  setTurno(Turnos.X)
  setBoard(Array(9).fill(null))
  setWinner(false)
}



  return (
    <div className='board'>
      <h1>Game Game Game Game</h1>
        <div className='game'>
     {board.map((e,index)=> {
        return (
        <button type='Submit' key={index} className='square' onClick={()=>ChangeTurn(index)} value='x' >{board[index]}</button>
        )
     })}




    </div>

    <div className='turn'>
      { turno===Turnos.X ? 
      <>
        <button className='square is-selected'>{Turnos.X}</button>
        <button className='square '>{Turnos.O}</button>
        </>
      :
      <>  
      <button className='square'>{Turnos.X}</button>
      <button className='square is-selected'>{Turnos.O}</button>
      </>
      }


      </div>


      { winner? <div className='winner'>
      <h1 className='text'>Gana {showWinner}</h1>
      <button onClick={Reset}>Reset</button>
     </div>: <p></p>}


    </div>




  )
}

export default App
