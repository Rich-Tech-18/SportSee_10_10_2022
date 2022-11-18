import BarCharts from '../BarCharts/BarCharts';
import LegendBarCharts from '../LegendBarCharts/LegendBarCharts';
import { useIdParamUrl, useData } from '../../datas/stateData';
import { dataSort } from '../../datas/classesData';
import { getActivity } from '../../api/api';
import './ContainerBarCharts.css';


const ContainerBarChats = () => {
    const idUser = useIdParamUrl();
    const dataUser = useData(idUser, getActivity, dataSort);
    
    return (
        <div className="gridBarCharts">
            <div className="paddingBarCharts"><LegendBarCharts /></div>
            <div className="paddingBarCharts"><BarCharts data={dataUser.barCharts()}/></div>
        </div>
    )
}


export default ContainerBarChats;