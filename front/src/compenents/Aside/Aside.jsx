import relax from '../../assets/itemRelax.svg';
import bike from '../../assets/itemBike.svg';
import swim from '../../assets/itemSwim.svg';
import workout from '../../assets/itemWorkout.svg';
import './Aside.css';


function Aside(){
    return(
        <aside className='asideContainer'>
            <ul className='menuAside'>
                <li><img src={relax} alt="menu aside relax" className="imgAside"></img></li>
                <li><img src={swim} alt="menu aside swim" className="imgAside"></img></li>
                <li><img src={bike} alt="menu aside bike" className="imgAside"></img></li>
                <li><img src={workout} alt="menu aside workout" className="imgAside"></img></li>
                <li className="positionText"><p className='verticalText'>Copiryght, SportSee 2020</p></li>
            </ul>
            
            
        </aside>
    )
}


export default Aside;