import React from 'react'

export const Coverflow = () => {
    const newLocal = 'img'
  return (
    <div>
        <div className="cfcontainer">
            <div className="slider">
                <div className='cfprev'><img src='img1.jpg'></img></div>
                <div className='cfcurrent'><img src='img2.jpg'></img></div>
                <div className='cfnext'><img src='img3.jpg'></img></div>
               </div>
        </div>


    </div>
  )
}
