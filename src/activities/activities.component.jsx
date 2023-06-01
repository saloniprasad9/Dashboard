import React from 'react'
import './activities.styles.css';
import Graph from '../line-chart/line-chart.component';
import downicon from '../assets/Vector(5).png';
const Activities = () => {
  return (
    <div className='activities-card'>
        <h4 className='activities-header'>Activities</h4>
        <div className='date-card1'>
            <h6 className='date1'>May - June 2021</h6>
            <img className='downicon1' src={downicon}></img>
        </div>
        <div className='graph-card'>
            <Graph/>
        </div>
    </div>
  )
}

export default Activities;