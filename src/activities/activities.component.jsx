import React from 'react'
import './activities.styles.css';
import Graph from '../line-chart/line-chart.component';
const Activities = () => {
  return (
    <div className='activities-card'>
        <h4 className='activities-header'>Activities</h4>
        <div className='graph-card'>
            <Graph/>
        </div>
    </div>
  )
}

export default Activities;