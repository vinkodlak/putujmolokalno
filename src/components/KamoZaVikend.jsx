import React, { useState } from 'react'
import styled from 'styled-components'

import { SectionTitleWithButtons } from '../components/SectionTitleWithButtons'
import { Card } from './card5'

const Section = styled.section`
  margin-bottom: 75px;
  position: relative;
  z-index: 1;
`
const StyledSectionTitleWithButtons = styled(SectionTitleWithButtons)`
  grid-column: 2 / -2;
`

const StyledCard = styled(Card)`
  /* width: 100%;
  max-width: 554px;
  background: gray;
  overflow-x: hidden;
  ${({ isFirst }) => isFirst && `
    justify-self: end;
  `}
  ${({ isFirst, isLast }) => (isFirst || isLast) && `
    background: orange;
  `} */
`

const Carousel = styled.div`
  display: grid;
  grid-template-columns: var(--mainGrid2);
  gap: 16px;
  transform: translateX(0%);
`
const CarouselWrap = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  max-width: 100%;
  /* overflow: hidden; */

`

const ItemWrap = styled.div`
  /* width: 100%; */
  overflow: hidden;
  position: relative;

  ${StyledCard} {
    position: absolute;
    width: 500px;
    transform: scale(0.9);
    opacity: 0.5;
  }

  ${({ isFirst }) => isFirst && `
    ${StyledCard} {
      right: 0;
      transform-origin: right;
    }
  `}
  ${({ isLast }) => isLast && `
    ${StyledCard} {
      transform-origin: left;
    }
  `}
`

const initialCards = [
  { title: 'Delnice', category: 'OPG'  },
  { title: 'Zlatni Rat', category: 'Kupanje' },
  { title: 'Samobor', category: 'Izlet' },
  { title: 'Rijeka', category: 'Povijest' },
]

export const KamoZaVikend = () => {
  const [cards, setCards] = useState(initialCards)

  const customPrev = () => {
    console.log('prev')
    setCards(cards => {
      const item = cards.pop()
      return [item, ...cards]
    })
  }
  const customNext = () => {
    console.log('next')
    setCards(cards => {
      const item = cards.shift()
      return [...cards, item]
    })
  }

  return (
    <Section className="full">
      <StyledSectionTitleWithButtons
        prev={customPrev}
        next={customNext}
      >
        Kamo za vikend
      </StyledSectionTitleWithButtons>

      <CarouselWrap>

        <Carousel>
          {cards.map((card, index) => {
            const isFirst = index === 0
            const isLast = index === cards.length-1
            const Item = () => (
              <StyledCard 
                key={index}
                isFirst={isFirst}
                isLast={isLast}
                card={card}
              />
            )
            if (isFirst || isLast) return (
              <ItemWrap
                isFirst={isFirst}
                isLast={isLast}
              ><Item /></ItemWrap>
            )
            
            return (
              <Item />
            )
          })}
        </Carousel>
      
      </CarouselWrap>

    </Section>
  )
}
