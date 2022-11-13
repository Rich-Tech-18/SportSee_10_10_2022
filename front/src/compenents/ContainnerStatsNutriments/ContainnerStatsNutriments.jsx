import StatsNutriments from "../StatsNutriments/StatsNutriments";
import { getCaloriesCount, getCarbohydrateCount, getLipidCount, getProteinCount, } from "../../api/api";
import { useParams } from "react-router";
import React, {useState, useEffect} from "react";
import calorie from "../../assets/calorie.svg";
import protein from "../../assets/protein.svg";
import carbohydrate from "../../assets/carbohydrate.svg";
import lipid from "../../assets/lipid.svg";
import { getNutriments } from "../../datas/classesData";
import "./ContainnerStatsNutriments.css";


const ContainnerStatsNutriments = () => {
    const id = useParams();
    const [caloriesNumber, setCalories] = useState([]);
    const [proteinNumber, setProtein] = useState([]);
    const [carbohydrateNumber, setCarbohydrate] = useState([]);
    const [lipidNumber, setLipid] = useState([]);

    useEffect(() => {
        const getCalories = async (id) => {
            const getCaloriesData = await getCaloriesCount(id);
            setCalories(getCaloriesData);
        }
        getCalories(id.idUser)
        
    }, [id.idUser])

    useEffect(() => {
        const getProtein = async (id) => {
            const getProteinData = await getProteinCount(id);
            setProtein(getProteinData);
        }
        getProtein(id.idUser)
        
    }, [id.idUser])

    useEffect(() => {
        const getCarbohydrate = async (id) => {
            const getCarbohydrateData = await getCarbohydrateCount(id);
            setCarbohydrate(getCarbohydrateData);
        }
        getCarbohydrate(id.idUser)
        
    }, [id.idUser])

    useEffect(() => {
        const getLipid = async (id) => {
            const getLipidData = await getLipidCount(id);
            setLipid(getLipidData);
        }
        getLipid(id.idUser)
        
    }, [id.idUser])

    const calorieFormat = new getNutriments(caloriesNumber);
    const proteinFormat = new getNutriments(proteinNumber);
    const carbohydrateFormat = new getNutriments(carbohydrateNumber);
    const lipideFormat = new getNutriments(lipidNumber);

    

    return(
        <ul className="gridNutriments">
            <li><StatsNutriments image={calorie} type={caloriesNumber > 1 ? "Calories" : "Calorie"} number={calorieFormat.getNutriments() +"kCal"}/></li>
            <li><StatsNutriments image={protein} type={caloriesNumber > 1 ? "Proteines" : "Proteine"} number={proteinFormat.getNutriments() + "g"}/></li>
            <li><StatsNutriments image={carbohydrate} type={caloriesNumber > 1 ? "Glucides" : "Glucide"} number={carbohydrateFormat.getNutriments() + "g"}/></li>
            <li><StatsNutriments image={lipid} type={caloriesNumber > 1 ? "Lipides" : "Lipide"} number={lipideFormat.getNutriments() + "g"}/></li>
        </ul>
    )
}


export default ContainnerStatsNutriments;