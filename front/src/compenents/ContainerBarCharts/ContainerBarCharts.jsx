import BarCharts from '../BarCharts/BarCharts';
import LegendBarCharts from '../LegendBarCharts/LegendBarCharts';
import './ContainerBarCharts.css';


const ContainerBarChats = () => {
    return (
        <div className="gridBarCharts">
            <div className="paddingBarCharts"><LegendBarCharts /></div>
            <div className="paddingBarCharts"><BarCharts /></div>
        </div>
    )
}


export default ContainerBarChats;