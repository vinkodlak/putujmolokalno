import React from 'react'
import styled from 'styled-components'

import Select from './Select'
import { YellowButton } from './YellowButton'

const SelectForm = styled.div`
  display: flex;
`

const Button = styled(YellowButton)`
  min-width: 269px;
  border-radius: 0 10px 10px 0;
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

      <Button isHero>Istraži</Button>

    </SelectForm>
  )
}
