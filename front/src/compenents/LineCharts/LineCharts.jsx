import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { getAverageSessions } from '../../api/api';
import {dataSort} from '../../datas/classesData';
import './LineCharts.css';


/**
 * Component for showing the Radial Barcharts.
 *
 * @component
 * 
 */


const LineCharts = (props) => {
   /**
   * @type {Object} id - the parametre of the user in Object format
   * @type {Object} average - fetch the data from the api with no sort.
   * @type {Object} averageSort - sort the data in good format for the charts
   */
      // const id = useParams();
      // const [average, setAverage] = useState([]);


      // useEffect(() => {
      //   const getAverageSessionData = async (id) => {
      //       const averageSessionsData = await getAverageSessions(id);
      //       setAverage(averageSessionsData);
      //   }
      //   getAverageSessionData(id.idUser);
      // }, [id.idUser])

      // const averageSort = new dataSort(average);


    return (
      
        
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={100}
          height={300}
          data={props.data}
        >
          <XAxis dataKey="day" axisLine={false} tickLine={false} stroke="#FFFFFF" opacity={0.7}/>
          <YAxis hide={true}/>
          <Tooltip 
          contentStyle={{ backgroundColor: "white" }}
          itemStyle={{ color: "black" }}
          formatter={function (value, name) {
            return [value + name];
          }}
          labelFormatter={function (value) {
            return ``;
          }}
          />
          <Line type="monotone" dot={false} dataKey="min" stroke="#FFFFFF" />
        </LineChart>
      </ResponsiveContainer>
    )
}

export default LineCharts;