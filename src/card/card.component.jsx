import './card.styles.css';

import React from 'react'
import revenuesicon from '../assets/Vector(7).png';
import transactionsicon2 from '../assets/Vector(10).png';
import likesicon from '../assets/Vector(8).png';
import usersicon from '../assets/Vector(9).png';
const Card = () => {
  return (
    <div>
        <div className='revenues'>
            <img src={revenuesicon} className='revenues-icon'></img>
            <h5 className='h-1'>Total Revenues</h5>
            <h3 className='a-1'>$2,129,430</h3>
        </div>
        <div className='transactions2'>
            <img src={transactionsicon2} className='transactions-icon2'></img>
            <h5 className='h-2'>Total Transactions</h5>
            <h3 className='a-2'>1,520</h3>
        </div>
        <div className='likes'>
            <img src={likesicon} className='likes-icon'></img>
            <h5 className='h-3'>Total Likes</h5>
            <h3 className='a-3'>9,721</h3>
            
        </div>
        <div className='users2'>
            <img src={usersicon} className='users-icon2'></img>
            <h5 className='h-4'>Total Users</h5>
            <h3 className='a-4'>892</h3>
        </div>
    </div>
  )
}

export default Card