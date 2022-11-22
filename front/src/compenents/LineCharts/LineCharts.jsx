import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from "prop-types"
import './LineCharts.css';


/**
* A average sessions activity Line chart component.
* @param {Object} data
* @external Recharts library
* @see https://recharts.org/en-US/api/LineChart
* @returns A Line chart React Element.
*/


const LineCharts = (props) => {
   /**
   * @type {Object} id - the parametre of the user in Object format
   * @type {Object} average - fetch the data from the api with no sort.
   * @type {Object} averageSort - sort the data in good format for the charts
   */



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

LineCharts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
    day : PropTypes.string,
    min : PropTypes.number,
  })
  )
}

export default LineCharts;