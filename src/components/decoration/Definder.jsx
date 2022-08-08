import React from 'react'
import './DefinderStyles.css'

const Definder = (props) => {
  return (
    <div className='definder'>
        <div className='text-definder'>
            <h3>{props.text}</h3>
        </div>  
    </div>
  )
}

export default Definder