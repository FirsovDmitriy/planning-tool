import React from 'react'
import './ProgressBar.scss'

const ProgressBar = props => {
  return (
    <div className='r-progress-bar'>
      <div
        className="progress-bar__current"
        role='progressbar'
        style={ {width: `${props.currentWidth}%`} }
      >
      </div>
    </div>
  )
}

export default ProgressBar
