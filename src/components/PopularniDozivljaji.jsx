import React from 'react'
import styled from 'styled-components'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { SectionTitle } from '../components/SectionTitle'
import { Card } from '../components/Card1'

const Section = styled.section`
  margin-bottom: 75px;
`

const cards = [
  { 
    title: 'Hrana & vino',
    desc: 'Zašto je Vinodar najzabavniji festival vina u kontinentalnoj Hrvatskoj? Vinoljupci, vrsni vinari i ljubitelji vina - spremite se...'
  },
  { 
    title: 'Kupanje',
    desc: 'Zlatni Rat nalasi se na otoku Braču. Plaža je popularna zbog snježno bijelog šljunka i odličnih uvijeta za jedrenje na dasci'
  },
  {
    title: 'Planinarenje',
    desc: 'Nacionalni park Paklenica smješten je u primorskom mjetu Stari Grad u podnožju slikovite planine Velebit i jedan je od najstarijih bisera...'
  }
]

export const PopularniDozivljaji = () => {
  return (
    <Section>
      <SectionTitle>Popularni doživljaji</SectionTitle>

      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}

    </Section>
  )
}
