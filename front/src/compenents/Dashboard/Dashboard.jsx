import React from 'react';
import HelloFirstName from '../HelloFirstName/HelloFirstName';
import ContainnerStatsNutriments from '../ContainnerStatsNutriments/ContainnerStatsNutriments';
import ContainerBarChats from '../ContainerBarCharts/ContainerBarCharts';
import ContainerLineCharts from '../ContainerLineCharts/ContainerLineCharts';
import ContainerRadarCharts from '../ContainerRadarCharts/ContainerRadarCharts';
import ContainerRadialBarCharts from '../ContainerRadialBarCharts/ContainerRadialBarCharts';
import Aside from '../Aside/Aside';
import './Dashboard.css';


/**
 * Component for showing the dashboard.
 *
 * @component
 * 
 * @return HTML element
 * 
 */

const Dashboard = () => {

    return(
        <section className="containerDashboard">
            <Aside/>
            <HelloFirstName/>
            <ContainerBarChats />
            <ContainnerStatsNutriments />
            <ContainerLineCharts />
            <ContainerRadarCharts />
            <ContainerRadialBarCharts />
            
        </section>
    )
}

export default Dashboard;