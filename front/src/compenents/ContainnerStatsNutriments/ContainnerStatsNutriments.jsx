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


const ContainnerStatsNutriments = () => {
    const idUser = useIdParamUrl();
    const dataCaloriesUser = useData(idUser, getCaloriesCount, dataNutriments);
    const dataProteinUser = useData(idUser, getProteinCount, dataNutriments);
    const dataCarbohydrateUSer = useData(idUser, getCarbohydrateCount, dataNutriments);
    const dataLipidUser = useData(idUser , getLipidCount, dataNutriments);
    // const id = useParams();
    // const [caloriesNumber, setCalories] = useState([]);
    // const [proteinNumber, setProtein] = useState([]);
    // const [carbohydrateNumber, setCarbohydrate] = useState([]);
    // const [lipidNumber, setLipid] = useState([]);

    // useEffect(() => {
    //     const getCalories = async (id) => {
    //         const getCaloriesData = await getCaloriesCount(id);
    //         setCalories(getCaloriesData);
    //     }
    //     getCalories(id.idUser)
        
    // }, [id.idUser])

    // useEffect(() => {
    //     const getProtein = async (id) => {
    //         const getProteinData = await getProteinCount(id);
    //         setProtein(getProteinData);
    //     }
    //     getProtein(id.idUser)
        
    // }, [id.idUser])

    // useEffect(() => {
    //     const getCarbohydrate = async (id) => {
    //         const getCarbohydrateData = await getCarbohydrateCount(id);
    //         setCarbohydrate(getCarbohydrateData);
    //     }
    //     getCarbohydrate(id.idUser)
        
    // }, [id.idUser])

    // useEffect(() => {
    //     const getLipid = async (id) => {
    //         const getLipidData = await getLipidCount(id);
    //         setLipid(getLipidData);
    //     }
    //     getLipid(id.idUser)
        
    // }, [id.idUser])

    // const calorieFormat = new getNutriments(caloriesNumber);
    // const proteinFormat = new getNutriments(proteinNumber);
    // const carbohydrateFormat = new getNutriments(carbohydrateNumber);
    // const lipideFormat = new getNutriments(lipidNumber);

    

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