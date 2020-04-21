import React from 'react'
import styled from 'styled-components'

import { cards } from '../../content/cards'
import { SectionTitle } from '../components/SectionTitle'
import { Card as BigCard } from './Card2'
import { Card } from './Card3'

const Section = styled.section`
  display: grid;
  grid-template-columns: var(--innerGrid);
  grid-template-rows: auto repeat(4, 1fr);
  gap: 10px 16px;
  margin-bottom: 75px;
  position: relative;
  z-index: 1;
`

const StyledBigCard = styled(BigCard)`
  grid-column: 1 / span 11;
  grid-row: 2 / span 4;
`

const StyledCard = styled(Card)`
  grid-column: 12 / -1;
`

export const SkriveneLokacije = () => {
  return (
    <Section>
      <SectionTitle>Skrivene lokacije</SectionTitle>

      <StyledBigCard card={cards[0]} />

      {cards.filter((card,index) => index > 0 && index <= 4).map((card, index) => (
        <StyledCard key={index} card={card} />
      ))}

    </Section>
  )
}
