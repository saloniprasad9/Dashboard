import './schedule-card.styles.css';
import sideicon from '../assets/Vector(6).png';
const ScheduleCard = () => {
    return(
        <div className='schedule-card'>
            <h2 className='schedule-header'>Today's Schedule</h2>
            <div className='schedule-1'>
                <div className='line-1'></div>
                <h5 className='s-1'>Meeting with suppliers from Kuta Bali </h5>
                <h6 className='t-1'>14.00-15.00</h6>
                <h6 className='p-1'>at Sunset Road, Kuta, Bali</h6>
            </div>  
            <div className='schedule-2'>
                <div className='line-2'></div>
                <h5 className='s-2'>Check operation at Giga Factory 1</h5>
                <h6 className='t-2'>18.00-20.00</h6>
                <h6 className='p-2'>at Central Jakarta</h6>
            </div>
            <h6 className='see-all'>See all</h6>
            <img className='sideicon' src={sideicon}></img>      
        </div>
    )
}

export default ScheduleCard

