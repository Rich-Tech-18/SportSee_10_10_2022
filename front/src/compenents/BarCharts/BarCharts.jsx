import { getActivity } from '../../api/api';
import { useParams } from "react-router"; 
import React, {useState, useEffect} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./BarCharts.css";



const BarCharts = () => {
  const id = useParams();
  const [activity, setActivity] = useState([]);


  useEffect(() => {
    const getActivityData = async (id) => {
        const activityData = await getActivity(id);
        setActivity(activityData);
    }
    getActivityData(id.idUser);
  }, [id.idUser])

  console.log(activity[0])
    return (
      <div className='containnerCharts'>

      
        <ResponsiveContainer width="100%" height="100%">
          
        <BarChart
          width={500}
          height={300}
          data={activity[0]}
          reverseStackOrder={false}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis orientation='right'/>
          <Tooltip />
          
          <Bar dataKey="kilogram" fill="#8884d8" />
          <Bar dataKey="calories" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    )
}


export default BarCharts;


