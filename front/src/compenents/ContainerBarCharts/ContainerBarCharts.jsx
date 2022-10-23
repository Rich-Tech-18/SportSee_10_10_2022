import BarCharts from '../BarCharts/BarCharts';
import LegendBarCharts from '../LegendBarCharts/LegendBarCharts';
import './ContainerBarCharts.css';


const ContainerBarChats = () => {
    return (
        <div className="gridBarCharts">
            <div><LegendBarCharts /></div>
            <div><BarCharts /></div>
        </div>
    )
}


export default ContainerBarChats;