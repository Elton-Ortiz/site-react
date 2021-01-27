import { useState } from 'react';
import './page-about.css';


function PageAbout() {

    const [display, setDisplay] = useState("none");
    const [clicked, setClicked] = useState(" ")

    function toggle(){
      if(display === "block"){
          setDisplay("none")
          setClicked(" ")
        }else{
            setClicked("clicked");
            setTimeout(()=>{
                setDisplay("block")
            },850)
      }
    }

    return (
        <div className={"about " + clicked}  onClick={()=>{toggle()}} >
             <div style={{display:display}} >
                 <span className="close"  >
                     <a  href="#"
                     onClick={()=>{toggle()}}
                     >X</a></span>
        <h1>About</h1>
        <main>
        <p>Esta página foi feita com o intuito, de ser uma cópia da página <a href="https://pt-br.reactjs.org/">reactjs.org</a> ela ainda está em construção!</p>
        <h2>Tecnologia usadas</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Git</li>

        </ul>
        <a className="repository" href="https://github.com/Elton-Ortiz/site-react">Repositório</a>
        </main>
    </div>
        </div>
    )
}

export default PageAbout;