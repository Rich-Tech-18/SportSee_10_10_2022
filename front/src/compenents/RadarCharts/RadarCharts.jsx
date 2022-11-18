import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import './RadarCharts.css';


/**
 * Component for showing the Radial Barcharts.
 *
 * @component
 * 
 */

const RadarCharts = (props) => {
   /**
   * @type {Object} id - the parametre of the user in Object format
   * @type {Object} performance - fetch the data from the api with no sort.
   * @type {Object} dataPerf - sort the data in good format for the charts
   */
  // const id = useParams();
  // const [performance, setPerformance] = useState([]);

  //     useEffect(() => {
  //       const getPerformanceData = async (id) => {
  //           const performanceData = await getPerformance(id);
  //           setPerformance(performanceData);
  //       }
  //       getPerformanceData(id.idUser);
  //     }, [id.idUser]);

    // const dataPerf = new dataSort(performance);

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


export default RadarCharts;