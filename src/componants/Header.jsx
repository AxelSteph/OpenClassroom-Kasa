import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import photo from '../assets/logo.png';


function Header() {
    return (
        <header>
            <img src={photo} alt="Kasa Logo" />
            <nav>
                <ul>
                    <li><NavLink to="/home">Accueil</NavLink></li>
                    <li><NavLink to="/about">À propos</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;