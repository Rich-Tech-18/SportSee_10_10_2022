import "./StatsNutriments.css";


const StatsNutriments = (props) => {
    return (
        <div className="containnerNutriment">
            <img src={props.image} alt={props.type}></img>
            <div>
                <p className="textNutriments">{props.number}</p>
                <p className="textNutrimentsType">{props.type}</p>
            </div>
        </div>
    )
}

export default StatsNutriments;