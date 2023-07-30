import React from 'react'

const MusicPlayer = (props) => {
    
  return (
    <div className='musicplayercontainer'>
            <h2>Music Player</h2>
        <div className="background"></div>
        <div className="musicprogress">
            <div className="musiccompleted"></div>
        </div>
        <div className="musiccontroller">
            <div className="musicprev"><i className="fa-solid fa-backward-step"></i></div>
            <div className="musicpause"><i className="fa-solid fa-pause"></i></div>
            <div className="musicnext"><i className="fa-solid fa-forward-step"></i></div>


        </div>
    </div>
  )
}

export default MusicPlayer