import { getObjectifScore } from '../../api/api';
import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import './TextTitle.css';


/**
 * Component for showing the sentence if the goal is successful.
 *
 * @component
 * @return HTML element with score
 * 
 */

const TextTitle = () => {
    /**
     * @type {Object}
     */
    const id = useParams();
    /**
     * @type {Object}
     */
    const [score, setScore] = useState([]);
    
    
    /**
     * Function who setup the data
     * 
     * @return {Object}
     */
    useEffect(() => {
        const getScoreData = async (id) => {
            const scoreData = await getObjectifScore(id);
            setScore(scoreData);
        }
        getScoreData(id.idUser)
        
    }, [id.idUser])
    return (
        <div className="textTitle">{score > 0.15 ? "Félicitation ! Vous avez explosé vos objectifs hier 👏" : "Bravo ! Vous êtes sur le bon chemin 👏"}</div>
    )
}


export default TextTitle;