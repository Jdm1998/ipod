import React from 'react'

export const Menu = (props) => {
  return (
    <div className ="menucontainer">
        <h2>{props.title}</h2>
        
        <ul>
            {
                props.items.map((item,index)=>{
                    if(props.currentselection== index)
                    return <li className='active'>
                      {item}
                    </li>
                    return <li>{item}  </li>
                })
            }
        </ul>

        
    </div>
  )
}
