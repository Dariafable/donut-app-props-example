import React from 'react'
import './FoodStyles.css'

const Food = (props) => {
  return (
    <div className='food'>
        <div className='text-definder'>
            <h3>Enjoy the taste!</h3>
        </div>  

        <div className='grid-container'>
            <div style={{ background: `url('${props.bgImgLeft}') no-repeat center center/cover`}} className="left"></div>
            <div style={{ background: `url('${props.bgImgTop}') no-repeat center center/cover`}} className="top"></div>
            <div style={{ background: `url('${props.bgImgBottom}') no-repeat center center/cover`}} className="bottom"></div>
        </div>
    </div>
  )
}

export default Food