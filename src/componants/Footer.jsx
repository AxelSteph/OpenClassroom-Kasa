import '../styles/Footer.css';
import Logo from '../assets/logo-blanc.png';


function Footer() {
    return (
        <footer>
            <img src= {Logo} alt="Kasa Logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;