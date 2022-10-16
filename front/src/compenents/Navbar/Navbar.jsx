import logo from '../../assets/logo.svg';
import './Navbar.css';

function Navbar(){
    return(     
            <nav className="navContainer">
                <ul className="positionMenu">
                    <li className="positionLogo"><img src={logo} alt="logo du site SportSee" className="logoSportSee"></img><p className="textLogo">SportSee</p></li>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </nav>  
    )
}

export default Navbar;