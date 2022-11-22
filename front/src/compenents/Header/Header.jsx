import Navbar from '../Navbar/Navbar';
import './Header.css';

/**
 * Component for showing the container of the main menu.
 *
 * @component
 * 
 * @return HTML element
 * 
 */

function Header() {
    return ( 
        <header className="header">
            <Navbar />
        </header>
    )
};

export default Header;