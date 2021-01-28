import { Link } from 'react-router-dom';
import logo from '../../assets/logo192.png';
import lupa from '../../assets/lupa.png'

import './header.css';

function Header() {
    return (

        <header>
            <Link to="/" className="logo">
                <img src={logo} alt="logo"></img>
                <span>React</span>
            </Link>
            <nav>
                <ul>
                    <Link to="/work" ><li>Documentos</li></Link>
                    <Link><li>Tutorial</li></Link>
                    <Link><li>Blog</li></Link>
                    <Link><li>Comunidade</li></Link>
                </ul>
            </nav>
            <div className="right-cont" >

            <form>
                <span className="lupa">
                    {/* <img alt="lupa" src={lupa}></img> */}
                <input type="search"placeholder="Buscar docs" />
                </span>
            </form>
            <Link className="version">
            <span>v17.0.1</span>
           </Link>
           <Link>
           <strong style={{color: "#fff"}}>%</strong>
           <span className="languages">Languages</span>
            </Link> 
            <Link>
           <span className="github">GitHub</span>
            </Link> 
            </div>
        </header>
    )
}

export default Header;