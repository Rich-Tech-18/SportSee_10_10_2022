import RadialBarCharts from '../RadialBarCharts/RadialBarCharts';
import './ContainerRadialBarCharts.css';


const ContainerRadialBarCharts = () => {
    return (
        <div className="gridRadialCharts">
            <p className="textScore">Score</p>
            <RadialBarCharts />
            <p className="textPourcent">de votre objectif</p>
        </div>
    )
}

export default ContainerRadialBarCharts;