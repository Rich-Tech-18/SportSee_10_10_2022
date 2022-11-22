import RadarCharts from '../RadarCharts/RadarCharts';
import { useData, useIdParamUrl } from '../../datas/stateData';
import { getPerformance } from '../../api/api';
import { dataSort } from '../../datas/classesData';
import './ContainerRadarCharts.css';


/**
 * Component for showing a container for the RadarCharts in the Dashboard component.
 *
 * @component
 * 
 * @return HTML element
 * 
 */

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