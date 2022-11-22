import './LegendBarCharts.css';

/**
 * Component for showing the Legend of the barcharts.
 *
 * @component
 * 
 * @return HTML element
 * 
 */



const LegendBarCharts = () => {
    return (
        <div className='legendBarCharts'>
            <p className="textBarCharts">Activité quotidienne</p>
            <div className='flex'>
                <p className='flexCenter'><span className='dot black'></span>Poids (kg)</p>
                <p className='flexCenter'><span className='dot red'></span>Calories brûlées (kCal)</p>
            </div>
            
        </div>
    )
}

export default LegendBarCharts;