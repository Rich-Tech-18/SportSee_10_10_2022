import './Home.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


/**
 * Component for showing a menu for direction of the website.
 *
 * @component
 * 
 * @return HTML element
 * 
 */

const Home = () => {
    const [number, setNumber] = useState();

    useEffect(() => {
        const getRandomNumber = () => {
            const random = Math.floor(Math.random() * 100);
            if (random === (0 || 12 || 18)){
                getRandomNumber();
            }
            setNumber(random);
        }
        getRandomNumber()
    }, []);

    return(
        <nav className="navButton">
            <div>
            <Link to={'/18'}><button>Utilisateur id 18</button></Link>
           <Link to={'/12'}> <button>Utilisateur id 12</button></Link>
            </div>
            <div>
           <Link to={'/'+number}> <button className='alert'>simulation erreur API</button></Link>
            </div>
        </nav>
    )
}


export default Home;