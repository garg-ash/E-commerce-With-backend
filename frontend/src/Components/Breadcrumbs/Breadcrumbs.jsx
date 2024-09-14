import React from 'react'
import './Breadcrumbs.css'
import arrow_icon from '../Assets/arrow_icon.svg'

function Breadcrumbs(props) {
  const {product} = props 
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon } alt="" /> {product.name}
    </div>
  )
}

export default Breadcrumbs