import React from 'react'
import Select from 'react-select'

const customRadius = {
  left: '10px 0 0 10px',
  right: '0'
}

export default props => {
  return (
    <Select
      options={props.options}
      placeholder={props.placeholder}
      styles={{
        control: base => ({
          ...base,
          borderRadius: customRadius[props.variant] || base.borderRadius,
          minWidth: 269,
          border: '1px solid #d5d5d5',
          boxShadow: 'none',
          '&:hover': {
            border: '1px solid #d5d5d5'
          }
        }),
        indicatorSeparator: base => ({
          ...base,
          backgroundColor: 'transparent'
        }),
        placeholder: base => ({
          ...base,
          font: '400 20px/1.2 var(--sans)',
          color: '#00003b'
        }),
        singleValue: base => ({
          ...base,
          font: '400 20px/1.2 var(--sans)',
          color: '#00003b'
        }),
        valueContainer: base => ({
          ...base,
          padding: '27px 10px 25px'
        }),
        option: base => ({
          ...base,
          font: '400 20px/1.2 var(--sans)',
          color: '#00003b'
        })
      }}
    />
  )
}
