import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from "prop-types"
import './RadarCharts.css';


/**
* A stats activity radar chart component.
* @param {Object} data
* @external Recharts library
* @see https://recharts.org/en-US/api/RadarChart
* @returns A radar chart React Element.
*/

const RadarCharts = (props) => {
   /**
   * @type {Object} id - the parametre of the user in Object format
   * @type {Object} performance - fetch the data from the api with no sort.
   * @type {Object} dataPerf - sort the data in good format for the charts
   */


    return (
        <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={props.data}>
          <PolarGrid radialLines={false} stroke="#FFFFFF"/>
          <PolarAngleAxis dataKey="subject" stroke="#FFFFFF" tickLine={false} fontSize="0.7rem" tickSize={10}/>
          <Radar dataKey="performance" fill="#E60000" fillOpacity={0.6}/>
        </RadarChart>
      </ResponsiveContainer>
    )
}

RadarCharts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
    subject : PropTypes.string,
    perfomrance : PropTypes.number,
  })
  )
}


export default RadarCharts;