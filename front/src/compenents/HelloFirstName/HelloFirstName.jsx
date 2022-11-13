import {getFirstName} from '../../api/api';
import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import TextTitle from '../TextTitle/TextTitile';
import { getUserName } from '../../datas/classesData';
import './HelloFirstName.css';


const HelloFirstName = () => {
    const id = useParams();
    const [name, setFirstName] = useState([]);
    
    

    useEffect(() => {
        const getFirstNameData = async (id) => {
            const firstNameData = await getFirstName(id);
            setFirstName(firstNameData);
        }
        getFirstNameData(id.idUser)
        
    }, [id.idUser])

    const userName = new getUserName(name)

    return (
        <div className="gridTitle">
            <h1>Bonjour <span className="colorName">{userName.getName()}</span></h1>
            <TextTitle />
        </div>
        )
}


export default HelloFirstName;