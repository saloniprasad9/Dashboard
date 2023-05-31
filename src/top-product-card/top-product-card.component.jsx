import React from 'react'
import Pie from '../pie-chart/pie-chart.component';
import './top-product-card.styles.css';
import downicon from '../assets/Vector(5).png';
const ProductCard = () => {
  return (
    <div className='product-Card'>
        <div className='top-products'>
            Top Products
        </div>
        <div className='date-card'>
            <h6 className='date'>May - June 2021</h6>
            <img className='downicon' src={downicon}></img>
        </div>
        <Pie/>
    </div>
  )
}

export default ProductCard;