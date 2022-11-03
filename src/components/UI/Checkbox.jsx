import React from 'react'
import './Checkbox.scss'

const Checkbox = props => {
  return (
    <label className='check'>
      <input className='check__input' type="checkbox" name="" id="" checked={props.flag}/>
      <span className="check__box"></span>
    </label>
  )
}

export default Checkbox
