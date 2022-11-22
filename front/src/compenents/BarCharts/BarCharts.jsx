import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from "prop-types"
import "./BarCharts.css";



/**
* A array who show kilograms and calorie per week activity Bar chart component.
* @param {Object} data
* @external Recharts library
* @see https://recharts.org/en-US/api/BarChart
* @returns A bar chart React Element.
*/


const BarCharts = (props) => {
    return (
      <div className='containnerCharts'>

      
        <ResponsiveContainer width="99%" height={170}>
          
        <BarChart
          width={250}
          height={280}
          data={props.data}
          reverseStackOrder={false}
          
        >
          <CartesianGrid vertical={0} strokeDasharray="3 3" />
          <XAxis dataKey="name" interval="number" axisLine={false} tickLine={false}/>
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

BarCharts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
    day : PropTypes.string,
    kilogram : PropTypes.number,
    calories: PropTypes.number
  })
  )
}


export default BarCharts;


