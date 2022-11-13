import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getInfo } from '../../api/api';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import {dataSort} from '../../datas/classesData';
import './RadialBarCharts.css';


const RadialBarCharts = () => {
  const id = useParams();
  const [objectif, setObjectif] = useState([]);
  // const [score, setScore] = useState([]);
  // const [boolean, setBoolean] = useState(true);



  useEffect(() => {
    const getObjectif = async (id) => {
      const getObjectifData = await getInfo(id);
      setObjectif(getObjectifData);
    }
    getObjectif(id.idUser)
  }, [id.idUser]);

  // useEffect(() => {
  //   if(boolean && objectif.length !== 0){
  //     setBoolean(false);
  //     const getDataScore = async (array) => {
  //     if(objectif[0].score === undefined){
  //       const data = [{
  //         name : "objectif",
  //         score : objectif[0].todayScore,
  //         total : 1,
  //         fill : "#E60000"
  //       }];
  //       array = data;
  //       setScore(array)
  //     }else {
  //       const data = [{
  //         name : "objectif",
  //         score : objectif[0].score,
  //         total : 1,
  //         fill : "#E60000"
  //   }];
  //   array = data;
  //   setScore(array)
  //     }
  //   }
  //   getDataScore(score);
  //   }
  // }, [score, boolean, objectif]);

const radialData = new dataSort(objectif);
// console.log(radialData.radialBarCharts())
// console.log(toto.hello());

    return (
      <div>
        <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="100%" outerRadius="55%" barSize={10} startAngle={90} endAngle={450} data={radialData.radialBarCharts()}>
          {/* <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="total"
          /> */}
          <RadialBar
            minAngle={15}
            // label={{ position: 'insideStart', fill: '#fff' }}
            cornerRadius={15}
            background
            clockWise
            dataKey="score"
          />
        </RadialBarChart>
        
      </ResponsiveContainer>
      <p className="pourcent">{radialData.radialBarCharts()[0].score * 100} %</p>
      </div>
      
    )
}

export default RadialBarCharts;