import "./StatsNutriments.css";


/**
 * Component for showing the sentence if the goal is successful.
 *
 * @component
 * @exemple
 * const type = calorie
 * const number = 2000
 * const image = test.jpg
 * 
 * @return HTML element with property of stat nutriments
 * 
 */


const StatsNutriments = (props) => {
    /**
     * @type {string} image
     * @type {string} type - the nutriment
     * @type {number} number - the number of the nutriment
     */
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