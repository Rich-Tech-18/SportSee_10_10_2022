import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getPerformance } from '../../api/api';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import {dataSort} from '../../datas/classesData';
import './RadarCharts.css';


const RadarCharts = () => {
  const id = useParams();
  const [performance, setPerformance] = useState([]);
  // const [data, setData] = useState([
  //   {
  //     subject : "",
  //     performance : 0
  //   },
  // ]);
  // const [boolean, setBoolean] = useState(true);


      useEffect(() => {
        const getPerformanceData = async (id) => {
            const performanceData = await getPerformance(id);
            setPerformance(performanceData);
        }
        getPerformanceData(id.idUser);
      }, [id.idUser]);

    //   useEffect(() => {
    //     if (boolean && performance.length !== 0){  
    //     setBoolean(false);
    //     const getItems = async (array) => {
    //     const items = [

    //   {
    //     subject : "Intensité",
    //     performance : performance[0].data[5].value
    //   },
    //   {
    //     subject : "Vitesse",
    //     performance : performance[0].data[4].value
    //   },
    //   {
    //     subject : "Force",
    //     performance : performance[0].data[3].value
    //   },
    //   {
    //     subject : "Endurance",
    //     performance : performance[0].data[2].value
    //   },
    //   {
    //     subject : "Energie",
    //     performance : performance[0].data[1].value
    //   },
    //   {
    //     subject : "Cardio",
    //     performance : performance[0].data[0].value
    //   }
    // ];
    //       array = items;
    //       setData(array);
    //     }
    //     getItems(data);
    //     }
        
    //   }, [performance, data, boolean]);

    const dataPerf = new dataSort(performance);

    return (
        <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={dataPerf.radarCharts()}>
          <PolarGrid radialLines={false} stroke="#FFFFFF"/>
          <PolarAngleAxis dataKey="subject" stroke="#FFFFFF" tickLine={false} fontSize="0.7rem" tickSize={10}/>
          <Radar dataKey="performance" fill="#E60000" fillOpacity={0.6}/>
        </RadarChart>
      </ResponsiveContainer>
    )
}


export default RadarCharts;