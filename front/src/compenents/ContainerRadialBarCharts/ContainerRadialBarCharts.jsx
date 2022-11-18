import RadialBarCharts from '../RadialBarCharts/RadialBarCharts';
import { useData, useIdParamUrl } from '../../datas/stateData';
import { getInfo } from '../../api/api';
import { dataSort } from '../../datas/classesData';
import './ContainerRadialBarCharts.css';


const ContainerRadialBarCharts = () => {
    const idUser = useIdParamUrl();
    const dataUser = useData(idUser, getInfo, dataSort)

    return (
        <div className="gridRadialCharts">
            <p className="textScore">Score</p>
            <RadialBarCharts data={dataUser.radialBarCharts()} score={dataUser.radialBarCharts()[1]=== undefined ? 0 : dataUser.radialBarCharts()[0].score * 100}/>
            <p className="textPourcent">de votre objectif</p>
        </div>
    )
}

export default ContainerRadialBarCharts;