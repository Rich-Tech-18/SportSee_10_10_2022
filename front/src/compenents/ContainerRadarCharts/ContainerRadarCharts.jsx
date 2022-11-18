import RadarCharts from '../RadarCharts/RadarCharts';
import { useData, useIdParamUrl } from '../../datas/stateData';
import { getPerformance } from '../../api/api';
import { dataSort } from '../../datas/classesData';
import './ContainerRadarCharts.css';


const ContainerRadarCharts = () => {
    const idUser = useIdParamUrl();
    const dataUser = useData(idUser, getPerformance, dataSort);

    return (
        <div className="gridRadarCharts">
            <RadarCharts data={dataUser.radarCharts()}/>
        </div>
    )
}

export default ContainerRadarCharts;