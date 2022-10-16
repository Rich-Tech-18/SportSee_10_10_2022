import React from 'react';
import HelloFirstName from '../HelloFirstName/HelloFirstName';
import TextTitle from '../TextTitle/TextTitile';
import ContainnerStatsNutriments from '../ContainnerStatsNutriments/ContainnerStatsNutriments';
import BarCharts from '../BarCharts/BarCharts';
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
            <HelloFirstName/>
            <TextTitle/>
            <ContainnerStatsNutriments />
            <BarCharts />
        </section>
    )
}

export default Dashboard;