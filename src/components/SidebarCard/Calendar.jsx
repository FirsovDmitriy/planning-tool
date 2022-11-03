import React, { useEffect, useRef } from 'react'

import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

const Calendar = props => {

  console.log('calendar', props)

  const datePicker = useRef(null)

  

  const options = {
    onSelect ({ formattedDate }) {
      console.log(formattedDate)
      props.time(formattedDate)
    }
  }

  useEffect(() => {
    const airDatepicker = new AirDatepicker(datePicker.current, options)

    return () => {
      airDatepicker.destroy()
    }
  })

  return (
    <div ref={ datePicker }></div>
  )
}

export default Calendar
