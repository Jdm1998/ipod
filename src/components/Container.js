import React, { useState } from 'react'
 import  {Menu} from './Menu';
import { Coverflow } from './Coverflow';
import MusicPlayer from './MusicPlayer';
import Game from './Game';
import PingPong from './PingPong';
function Container(props) {
  const [currentselection, updateCurrentselection]= useState(0);
  const [currentMenu,setCurrentMenu]= useState("Menu");
  const [currentDisplay,setCurrentDisplay] = useState("");

  
    const MenuDetails={
      Menu:{
        title:"Menu",
        items:["cover-flow","Music","Games","Settings"]
      },
      Music:{
        title:"Music",
        items:["All Songs","favorites","Artists","Albums"]
      },
    };

    const onClickHandler = (abc)=>{
      switch (abc) {
        case "menu":
          console.log("menu");
          setCurrentMenu("menu");
          break;
      
          case "next":
            console.log("next");
            updateCurrentselection(prev => {
              return (prev + 1)%4;
            });
            break;

            case "playpause":
              console.log("playpause");
              break;
            
              case "back":
                console.log("back");
                updateCurrentselection((prev)=>{return (prev+3)%4});


                break;

              case "ok":
                  console.log("ok");
                  if(currentselection==1)
                    setCurrentMenu("Music");
                  break;
                
              
        default:
          break;

      }

    }

  return (
    <div className='container'>
    
      <div className="display">

          {/* <Menu {...MenuDetails.Menu} currentselection={currentselection} /> */}
          {/* <Coverflow/> */}
          <PingPong></PingPong>
                </div>
    <div className="controller">
        <div className="controlleroptions">

          <span className='menu' style={{ "--i": 0 }}><b style={{ "--i": 0 }} onClick={() => { onClickHandler("menu"); } }>Menu</b></span>
          <span className="next" style={{ "--i": 1 }}><b onClick={() => { onClickHandler("next"); } } style={{ "--i": 1 }}>Next</b></span>
          <span className="playpause" style={{ "--i": 2 }}><b onClick={() => { onClickHandler("playpause"); } } style={{ "--i": 2 }}>Play/Pause</b></span>
          <span className="back" style={{ "--i": 3 }}><b onClick={() => { onClickHandler("back"); } } style={{ "--i": 3 }}>Back</b></span>


        </div>
        <div className="nestedcircle" onClick={() => { onClickHandler("ok"); } }>
        </div>
      </div>
    </div>
  )
}

export default Container;
