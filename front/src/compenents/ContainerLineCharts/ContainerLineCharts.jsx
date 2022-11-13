import LineCharts from '../LineCharts/LineCharts';
import './ContainerLineCharts.css';


const ContainerLineCharts = () => {
    return (
        <div className="gridLineCharts">
            <p className="textLineChart">Durée moyenne des sessions</p>
            <LineCharts />
        </div>
    )
}


export default ContainerLineCharts;