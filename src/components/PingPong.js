import React, { useState } from 'react'
import "./pingpong.css"



const PingPong = () => {
let [rodX,updaterodX] = useState(0);
let ballVx=2;
let ballVy=3;


  return (
    <div className='ppcontainer'>
        <div className="bar1"></div>
        <div className="ball"></div>
        <div className="bar2"></div>
        </div>
  )
}



export default PingPong

