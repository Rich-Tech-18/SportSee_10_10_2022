import { getObjectifScore } from '../../api/api';
import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import './TextTitle.css';

const TextTitle = () => {
    const id = useParams();
    const [score, setScore] = useState([]);
    
    

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