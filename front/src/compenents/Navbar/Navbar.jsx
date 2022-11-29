import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import './Navbar.css';

/**
 * Component for showing the main menu of the website.
 *
 * @component
 * 
 * @return HTML element
 * 
 */

function Navbar(){
    return(     
            <nav className="navContainer">
                <ul className="positionMenu">
                    <Link to={'/'}><li className="positionLogo"><img src={logo} alt="logo du site SportSee" className="logoSportSee"></img><p className="textLogo">SportSee</p></li></Link>
                    <Link to={'/'}><li>Accueil</li></Link>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </nav>  
    )
}

export default Navbar;