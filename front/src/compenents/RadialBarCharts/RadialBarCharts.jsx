import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import './RadialBarCharts.css';
import PropTypes from "prop-types";


/**
* A daily activity bar chart component.
* @param {Object} data
* @external Recharts library
* @see https://recharts.org/en-US/api/RadialBarChart
* @returns A radial chart React Element.
*/

const RadialBarCharts = (props) => {
  /**
   * @type {Object} id - the parametre of the user in Object format
   * @type {Object} objectif - fetch the data from the api with no sort.
   * @type {Object} radialData - sort the data in good format for the charts
   */


    return (
      <div>
        <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="100%" outerRadius="55%" barSize={10} startAngle={90} endAngle={450} data={props.data}>
          <RadialBar
            minAngle={15}
            cornerRadius={15}
            background
            clockWise
            dataKey="score"
          />
        </RadialBarChart>
        
      </ResponsiveContainer>
      <p className="pourcent">{props.score} %</p>
      </div>
      
    )
}


RadialBarCharts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
    name : PropTypes.string,
    score : PropTypes.number,
    fill: PropTypes.string
  })
  )
}

export default RadialBarCharts;