import React from 'react'
import styled from 'styled-components'

import { SectionTitle } from './SectionTitle'
import { Card } from './Card1'
import Slider from './Slider'

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
  },
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

      <Slider
        options={{
          wrapAround: true,
          cellAlign: 'left'
        }}
      >
        {cards.map((card, index) => (
          <Card card={card} key={index}/>
        ))}
      </Slider>

    </Section>
  )
}
