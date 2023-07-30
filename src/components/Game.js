import React from 'react'

const Game = () => {
  return (
    <div className='game'>
        <h2 className='gameheading'>Ping Pong Game</h2>
        <ul className='gamemenu'>
            <li className='gamemenuitem active'>Start New Game</li>
            <li className='gamemenuitem'>Highest Score</li>
            <li className='gamemenuitem'>Exit</li>
            
        </ul>
    </div>
  )
}

export default Game