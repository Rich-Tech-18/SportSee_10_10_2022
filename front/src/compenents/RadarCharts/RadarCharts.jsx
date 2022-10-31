import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getPerformance } from '../../api/api';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import './RadarCharts.css';


const RadarCharts = () => {
  const id = useParams();
      const [performance, setPerformance] = useState([]);
      const [data, setData] = useState([]);
      const [boolean, setBoolean] = useState(true);


      useEffect(() => {
        const getPerformanceData = async (id) => {
            const performanceData = await getPerformance(id);
            setPerformance(performanceData);
        }
        getPerformanceData(id.idUser);
      }, [id.idUser]);


      useEffect(() => {
        if (boolean && performance.length !== 0){  
        setBoolean(false);
        const getItems = async (array) => {
        const  items = [

      {
        subject : "Intensité",
        performance : performance[0].data[5].value
      },
      {
        subject : "Vitesse",
        performance : performance[0].data[4].value
      },
      {
        subject : "Force",
        performance : performance[0].data[3].value
      },
      {
        subject : "Endurance",
        performance : performance[0].data[2].value
      },
      {
        subject : "Energie",
        performance : performance[0].data[1].value
      },
      {
        subject : "Cardio",
        performance : performance[0].data[0].value
      }
    ];
          array =  items;
          setData(array);
        }
        getItems(data);
        }
        
      }, [performance, data, boolean]);

    return (
        <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid radialLines={false}/>
          <PolarAngleAxis dataKey="subject" type="category"/>
          
          <Radar dataKey="performance" fill="#E60000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    )
}


export default RadarCharts;