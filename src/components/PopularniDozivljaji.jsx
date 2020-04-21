import React from 'react'
import styled from 'styled-components'
import Flickity from 'react-flickity-component'

import { SectionTitleWithButtons } from './SectionTitleWithButtons'
import { Card } from './Card1'
import BgImage from '../images/tilted-bg.inline.svg'

import { cards } from '../../content/cards'


const Section = styled.section`
  margin-bottom: 75px;
  position: relative;
  z-index: 1;

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 355px;
    width: 100%;
    z-index: 0;
    padding-bottom: 50%;
    background: url(${BgImage});
    background-size: cover;
    background-position-y: bottom;
    background-repeat: no-repeat;
  }
`

const StyledSectionTitleWithButtons = styled(SectionTitleWithButtons)`
  grid-column: 2 / -2;
`

const StyledFlickity = styled(Flickity)`
  grid-column: 1 / -1;
  overflow: hidden;
  outline: none;
`
export class PopularniDozivljaji extends React.Component {
  customPrev = () => {
    this.flkty.previous()
  }
  customNext = () => {
    this.flkty.next()
  }

  render() {
    return (
      <Section className="full">
        <StyledSectionTitleWithButtons
          prev={this.customPrev}
          next={this.customNext}
        >
          Popularni doživljaji
        </StyledSectionTitleWithButtons>

        <StyledFlickity
          flickityRef={c => this.flkty = c}
          options={{
            wrapAround: true,
            // cellAlign: 'left',
            prevNextButtons: false,
            pageDots: false,
          }}
        >
          {cards.map((card, index) => (
            <Card card={card} key={index}/>
          ))}
        </StyledFlickity>

      </Section>
    )
  }
}
