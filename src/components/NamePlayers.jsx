import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'
import "./NamePlayers.css"

export const NamePlayers = () => {
  let navigate = useNavigate();


  const [players, setplayers] = useState({
    player1: '',
    player2: ''
  })


  const handlerChangePlayer = ({ target }) => {
    setplayers({
      ...players,
      [target.name]: target.value
    })
  }


  const handlerStartGame = () => {
    localStorage.setItem('players', JSON.stringify(players))
    
    if(players.player1.length > 0 && players.player2.length > 0){
      navigate('/game')
    } else {
      alert("Porfavor ingrese los nombres")
    }
  }

  return (
    <div className='container-menu'>
      <h3>Piedra, Papel o tijera</h3>

      <div className='menuName'>
        <div className='menuNameBox'>
          <input name='player1' onChange={handlerChangePlayer} value={players.player1} type="text" placeholder='Player 1' />
          <input name='player2' onChange={handlerChangePlayer} value={players.player2} type="text" placeholder='Player 2' />

          <div style={{width: "100%"}}>
            <button className='btnStartGame' onClick={handlerStartGame} >
              Iniciar Juego
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
