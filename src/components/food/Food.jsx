import React from 'react'
import './FoodStyles.css'

const Food = (props) => {
  return (
    <div className='food' style={{ background: `url('${props.bgImgCover}') no-repeat center center/cover`}}>
        <div className='grid-container'>
            <div className="left" style={{ background: `url('${props.bgImgLeft}') no-repeat center center/cover`}} ></div>
            <div className="top" style={{ background: `url('${props.bgImgTop}') no-repeat center center/cover`}}></div>
            <div className="bottom" style={{ background: `url('${props.bgImgBottom}') no-repeat center center/cover`}}></div>
        </div>
    </div>
  )
}

export default Food