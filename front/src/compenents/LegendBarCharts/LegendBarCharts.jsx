import './LegendBarCharts.css';

/**
 * Component who show the Legends for the Barcharts components.
 *
 * @component
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