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

  console.log(activity[0])
    return (
      <div className='containnerCharts'>

      
        <ResponsiveContainer>
          
        <BarChart
          data={activity[0]}
          reverseStackOrder={true}
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis orientation='right' type="number" dataKey="kilogram" domain={["kilogram - 5", 'kilograme + 5']}/>
          <Tooltip />
          
          <Bar dataKey="kilogram" fill="#E60000" barSize={10} radius={[10, 10, 0, 0]}/>
          <Bar dataKey="calories" fill="#282D30" barSize={10} radius={[10, 10, 0, 0]}/>
        </BarChart>
      </ResponsiveContainer>
      </div>
    )
}


export default BarCharts;


