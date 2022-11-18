import LineCharts from '../LineCharts/LineCharts';
import { useIdParamUrl, useData } from '../../datas/stateData';
import { getAverageSessions } from '../../api/api';
import { dataSort } from '../../datas/classesData';
import './ContainerLineCharts.css';


const ContainerLineCharts = () => {
    const idUser = useIdParamUrl();
    const dataUser = useData(idUser, getAverageSessions, dataSort);
    
    return (
        <div className="gridLineCharts">
            <p className="textLineChart">Durée moyenne des sessions</p>
            <LineCharts data={dataUser.lineCharts()}/>
        </div>
    )
}


export default ContainerLineCharts;