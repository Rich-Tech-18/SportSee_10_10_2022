import { getActivity } from '../../api/api';
import { useParams } from "react-router"; 
import React, {useState, useEffect} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
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

  

    return (
      <div className='containnerCharts'>

      
        <ResponsiveContainer width="100%" height={270}>
          
        <BarChart
          width={250}
          height={280}
          data={activity[0]}
          reverseStackOrder={false}
          
        >
          <CartesianGrid vertical={0} strokeDasharray="3 3" />
          <XAxis interval="number"/>
          {/* <YAxis orientation='right' interval={"preserveEnd"} dataKey="kilogram" domain={0, 300}/>
          <YAxis orientation='right' interval={"preserveEnd"} dataKey="kilogram" domain={0, 300}/> */}
          <YAxis orientation="right" dataKey="kilogram" domain={['dataMin - 1', 'dataMax + 1']} interval="number" tickCount={4} allowDecimals={0} tickMargin={20} axisLine={0} tickLine={0} />
          <YAxis hide yAxisId="left" orientation="left" dataKey="calories"/>
          <Tooltip />
          
          <Bar dataKey="kilogram" fill="#282D30" barSize={7} radius={[10, 10, 0, 0]}/>
          <Bar dataKey="calories" fill="#E60000" barSize={7} yAxisId="left" radius={[10, 10, 0, 0]}/>
         
        </BarChart>
      </ResponsiveContainer>
      </div>
    )
}


export default BarCharts;


