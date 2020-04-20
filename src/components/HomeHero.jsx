import React from 'react'
import styled from 'styled-components'

import Select from './SelectForm'

const Hero = styled.div`
  background: #d5d5d5;
  color: #fff;
  font-family: var(--serif);

  &>* {
    grid-column: 2 / -2;
  }
`

const Title = styled.h1`
  font-size: 48px;
  margin: 198px 0 40px;
  line-height: 1.33;
`

const Slogan = styled.div`
  font-size: 32px;
  margin-bottom: 40px;
  line-height: 1.34;
`

const StyledSelect = styled(Select)`
  margin-bottom: 60px;
`

export const HomeHero = () => {
  return (
    <Hero className="full">
      <Title>Spremni za putovanje,<br />čim korona stane!</Title>
      <Slogan>Hrvatska je tako mala, a raznolika.<br />Tako poznata, a puna skrivenih dragulja.<br />Tako blizu i tako naša.</Slogan>
      <StyledSelect />
    </Hero>
  )
}
