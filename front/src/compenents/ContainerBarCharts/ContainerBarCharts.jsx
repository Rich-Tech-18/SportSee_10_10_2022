import BarCharts from '../BarCharts/BarCharts';
import LegendBarCharts from '../LegendBarCharts/LegendBarCharts';
import { useIdParamUrl, useData } from '../../datas/stateData';
import { dataSort } from '../../datas/classesData';
import { getActivity } from '../../api/api';
import './ContainerBarCharts.css';



/**
 * Component for showing a container for the barcharts in the dashboard component.
 *
 * @component
 * 
 * @return HTML element 
 * 
 */


const ContainerBarChats = () => {
    const idUser = useIdParamUrl();
    const dataUser = useData(idUser, getActivity, dataSort);
    return (
        <div className="gridBarCharts container">
            <div className="paddingBarCharts"><LegendBarCharts /></div>
            <div className="paddingBarCharts"><BarCharts data={dataUser.barCharts()}/></div>
        </div>
    )
}


export default ContainerBarChats;