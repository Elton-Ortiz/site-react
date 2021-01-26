import { Link } from 'react-router-dom';
import TextCard from '../../components/textCard/textCard.js'

import './home.css';

function Home() {
    return (
        <div>
            <div className="container">
                <div>
                    <h1>React</h1>
                    <p>Uma biblioteca JavaScript para criar interfaces de usuário</p>
                </div>
                <div className="container-button">
                    <Link>Comece a Usar</Link>
                    <Link>Faça o Tutorial {">"}</Link>
                </div>
            </div>
            <TextCard></TextCard>
        </div>
    )
}

export default Home;