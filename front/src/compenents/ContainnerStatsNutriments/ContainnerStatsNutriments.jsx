import StatsNutriments from "../StatsNutriments/StatsNutriments";
import { getCaloriesCount, getCarbohydrateCount, getLipidCount, getProteinCount, } from "../../api/api";
import { useParams } from "react-router";
import React, {useState, useEffect} from "react";
import calorie from "../../assets/calorie.svg";
import protein from "../../assets/protein.svg";
import carbohydrate from "../../assets/carbohydrate.svg";
import lipid from "../../assets/lipid.svg";
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

    

    return(
        <div>
            <StatsNutriments image={calorie} type={caloriesNumber > 1 ? "Calories" : "Calorie"} number={caloriesNumber}/>
            <StatsNutriments image={protein} type={caloriesNumber > 1 ? "Proteines" : "Proteine"} number={proteinNumber}/>
            <StatsNutriments image={carbohydrate} type={caloriesNumber > 1 ? "Glucides" : "Glucide"} number={carbohydrateNumber}/>
            <StatsNutriments image={lipid} type={caloriesNumber > 1 ? "Lipides" : "Lipide"} number={lipidNumber}/>
        </div>
    )
}


export default ContainnerStatsNutriments;