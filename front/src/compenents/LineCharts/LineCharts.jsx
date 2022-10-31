import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getAverageSessions } from '../../api/api';
import './LineCharts.css';


const LineCharts = () => {
      const id = useParams();
      const [average, setAverage] = useState([]);


      useEffect(() => {
        const getAverageSessionData = async (id) => {
            const averageSessionsData = await getAverageSessions(id);
            setAverage(averageSessionsData);
        }
        getAverageSessionData(id.idUser);
      }, [id.idUser])


    return (
      
        
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={average[0]}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sessionLength" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    )
}

export default LineCharts;