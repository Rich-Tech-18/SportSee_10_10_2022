import {getFirstName} from '../../api/api';
import React from 'react';
import TextTitle from '../TextTitle/TextTitile';
import { user } from '../../datas/classesData';
import { useIdParamUrl, useData } from '../../datas/stateData';
import './HelloFirstName.css';


/**
 * Component for showing the First name of the user.
 *
 * @component
 * 
 * @return HTML element
 * 
 */

const HelloFirstName = () => {
    const idUser = useIdParamUrl();
    const nameUser = useData(idUser, getFirstName, user);

    return (
        <div className="gridTitle">
            <h1>Bonjour <span className="colorName">{nameUser.getName()}</span></h1>
            <TextTitle />
        </div>
        )
}


export default HelloFirstName;