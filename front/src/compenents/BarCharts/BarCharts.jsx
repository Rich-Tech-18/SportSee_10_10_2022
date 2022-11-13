import { getActivity } from '../../api/api';
import { useParams } from "react-router"; 
import React, {useState, useEffect} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {dataSort} from '../../datas/classesData';
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

  const activitySort = new dataSort(activity);
 

  console.log(activitySort.barCharts())

    return (
      <div className='containnerCharts'>

      
        <ResponsiveContainer width="99%" height={170}>
          
        <BarChart
          width={250}
          height={280}
          data={activitySort.barCharts()}
          reverseStackOrder={false}
          
        >
          <CartesianGrid vertical={0} strokeDasharray="3 3" />
          <XAxis dataKey="name" interval="number" axisLine={false} tickLine={false}/>
          {/* <YAxis orientation='right' interval={"preserveEnd"} dataKey="kilogram" domain={0, 300}/>
          <YAxis orientation='right' interval={"preserveEnd"} dataKey="kilogram" domain={0, 300}/> */}
          <YAxis orientation="right" dataKey="kg" domain={['dataMin - 1', 'dataMax + 1']} interval="number" tickCount={4} allowDecimals={false} tickMargin={20} axisLine={false} tickLine={false} />
          <YAxis hide yAxisId="caloriesAxis" orientation="left" dataKey="Kcal"/>
          <Tooltip 
            contentStyle={{ backgroundColor: "#E60000" }}
            labelStyle={{ color: "#FFFFFF" }}
            itemStyle={{ color: "#FFFFFF" }}
            formatter={function (value, name) {
              return [value + name];
            }}
            labelFormatter={function (value) {
              return ``;
            }}
          />
          
          <Bar dataKey="kg" fill="#282D30" barSize={7} radius={[10, 10, 0, 0]}/>
          <Bar dataKey="Kcal" fill="#E60000" barSize={7} yAxisId="caloriesAxis" radius={[10, 10, 0, 0]}/>
         
        </BarChart>
      </ResponsiveContainer>
      </div>
    )
}


export default BarCharts;


