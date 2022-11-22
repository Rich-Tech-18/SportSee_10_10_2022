import StatsNutriments from "../StatsNutriments/StatsNutriments";
import { getCaloriesCount, getCarbohydrateCount, getLipidCount, getProteinCount } from "../../api/api";
import { useIdParamUrl, useData } from "../../datas/stateData";
import React from "react";
import calorie from "../../assets/calorie.svg";
import protein from "../../assets/protein.svg";
import carbohydrate from "../../assets/carbohydrate.svg";
import lipid from "../../assets/lipid.svg";
import { dataNutriments } from "../../datas/classesData";
import "./ContainnerStatsNutriments.css";


/**
 * Component for showing a container for the Stats nutriments in the Dashboard component.
 *
 * @component
 * 
 * @return HTML element
 * 
 */

const ContainnerStatsNutriments = () => {
    const idUser = useIdParamUrl();
    const dataCaloriesUser = useData(idUser, getCaloriesCount, dataNutriments);
    const dataProteinUser = useData(idUser, getProteinCount, dataNutriments);
    const dataCarbohydrateUSer = useData(idUser, getCarbohydrateCount, dataNutriments);
    const dataLipidUser = useData(idUser , getLipidCount, dataNutriments);
    
    return(
        <ul className="gridNutriments">
            <li><StatsNutriments image={calorie} type={dataCaloriesUser.getDataNutriments() > 1 ? "Calories" : "Calorie"} number={dataCaloriesUser.getDataNutriments() +"kCal"}/></li>
            <li><StatsNutriments image={protein} type={dataProteinUser.getDataNutriments() > 1 ? "Proteines" : "Proteine"} number={dataProteinUser.getDataNutriments() + "g"}/></li>
            <li><StatsNutriments image={carbohydrate} type={dataCarbohydrateUSer.getDataNutriments() > 1 ? "Glucides" : "Glucide"} number={dataCarbohydrateUSer.getDataNutriments() + "g"}/></li>
            <li><StatsNutriments image={lipid} type={dataLipidUser.getDataNutriments() > 1 ? "Lipides" : "Lipide"} number={dataLipidUser.getDataNutriments() + "g"}/></li>
        </ul>
    )
}


export default ContainnerStatsNutriments;