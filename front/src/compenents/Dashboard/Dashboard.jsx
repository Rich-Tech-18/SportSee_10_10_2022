import React from 'react';
import HelloFirstName from '../HelloFirstName/HelloFirstName';
import ContainnerStatsNutriments from '../ContainnerStatsNutriments/ContainnerStatsNutriments';
import ContainerBarChats from '../ContainerBarCharts/ContainerBarCharts';
import Aside from '../Aside/Aside';
import './Dashboard.css';



const Dashboard = () => {
   
    // const [user] = React.useState({});
    // const getUserData = async (id) => {
    //     const userData = await datas(id);
    //     user(userData);
    // }

//      React.useEffect(() => {
//     getUserData(18);
// }, [18])
// React.useEffect(() => {
//     getUserData(id);
// })

    return(
        <section className="containerDashboard">
            <Aside />
            <HelloFirstName/>
            <ContainerBarChats />
            <ContainnerStatsNutriments />
            
        </section>
    )
}

export default Dashboard;