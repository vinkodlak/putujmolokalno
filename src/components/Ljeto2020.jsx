import React from 'react'
import styled from 'styled-components'

import { SectionTitle } from '../components/SectionTitle'
import { Card } from '../components/Card4'

const cards = [
  { title: 'Jadranski otoci' },
  { title: 'Zadar' },
  { title: 'Plitvička jezera' },
  { title: 'Dubrovnik' },
  { title: 'NP Krka ' }
]

const Section = styled.section`
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;

`

const StyledSectionTitle = styled(SectionTitle)`
  grid-column: 1 / -1;
`

export const Ljeto2020 = () => {
  return (
    <Section>
      <StyledSectionTitle>Ljeto 2020</StyledSectionTitle>
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </Section>
  )
}
