import { useState } from 'react';
import './projects-menu.css';


function ProjectsMenu() {

    const [display, setDisplay] = useState("block");
    const [clicked, setClicked] = useState("clicked")

    function toggle(){
      if(display === "block"){
          setDisplay("none")
          setClicked(" ")
        }else{
            setClicked("clicked");
            setTimeout(()=>{
                setDisplay("block")
            },500)
      }
    }

/*this function is only for homepage*/
    function started(){
        setTimeout(()=>{
            toggle()
        },1500)
    }
    window.onload =  started;
/***********************************/

    return (
        <div className={"proj-cont " + clicked}  onClick={()=>{toggle()}} >
             <div style={{display:display}} >
             <span className="close"  >
                     <a  href="#"
                     onClick={()=>{toggle()}}
                     >X</a></span>
        <h1>Projects</h1>
        <nav>
            <ul>
                <li><a target="_blank" rel="noreferrer" href="https://siteform.netlify.app/">Form</a></li>
                <li><a href="https://eltonortizmyworks.netlify.app/">reactjs.org copy
            <p>Trabalhando atualmente</p>
                </a>
                </li>
                <li><a target="_blank" rel="noreferrer" href="https://siteform.netlify.app/">angular.io copy
            <p>Próximo projeto</p>
                </a>
                </li>
            </ul>
        </nav>
    </div>
        </div>
    )
}

export default ProjectsMenu;