import React from 'react'
import styled from 'styled-components'
import Select from './Select'

const SelectForm = styled.div`
  display: flex;
`

const Button = styled.button`
  min-width: 269px;
  background-image: linear-gradient(to right, #ffb001, #fcc319);
  border: 0;
  border-radius: 0 10px 10px 0;
  font: 700 20px/1.2 var(--Lato);
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 3px 6px 0 rgba(0,0,0,0.16);
  transition: box-shadow 0.15s; 

  &:hover {
    box-shadow: 
      0 3px 6px 0 rgba(0,0,0,0.16),
      0 3px 6px 0 rgba(0,0,0,0.16);
  }
`

export default ({className}) => {
  const regijaOptions = [
    { value: 'Istra', label: 'Istra' },
    { value: 'Zagreb', label: 'Zagreb' },
    { value: 'Dalmacija', label: 'Dalmacija' },
  ]
  const dozivljajOptions = [
    { value: 'Kupanje', label: 'Kupanje' },
    { value: 'Šuma', label: 'Šuma' },
    { value: 'Muzej', label: 'Muzej' },
    { value: 'Tralala', label: 'Tralala' },
  ]

  return (
    <SelectForm className={className}>

      <Select
        variant="left"
        options={regijaOptions}
        placeholder={`Biraj Regiju`}
      />

      <Select
        variant="right"
        options={dozivljajOptions}
        placeholder={`Biraj Doživljaj`}
      />

      <Button>Istraži</Button>

    </SelectForm>
  )
}
