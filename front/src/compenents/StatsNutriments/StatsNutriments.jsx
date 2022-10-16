import "./StatsNutriments.css";


const StatsNutriments = (props) => {
    return (
        <div className="containnerNutriment">
            <img src={props.image} alt={props.type}></img>
            <div>
                <p>{props.number}</p>
                <p>{props.type}</p>
            </div>
        </div>
    )
}

export default StatsNutriments;