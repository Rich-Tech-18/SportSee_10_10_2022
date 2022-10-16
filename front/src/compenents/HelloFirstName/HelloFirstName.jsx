import {getFirstName} from '../../api/api';
import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
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

    return (<React.Fragment>
            <h1>Bonjour <span>{name}</span></h1>
            </React.Fragment>)
}


export default HelloFirstName;