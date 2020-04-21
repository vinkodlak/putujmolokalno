import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.article`
  background: #d5d5d5;
  position: relative;
  height: 212px;
  box-shadow: var(--shadow);
  border-radius: 10px;
`

const Image = styled.div``
const Title = styled.h3`
  margin: 0;
  position: absolute;
  bottom: 0;
  height: 85px;
  padding: 10px;
  font: var(--serif24);
  color: #3b3b3b;
  display: grid;
  align-content: end;
  background-image: linear-gradient(to bottom, transparent, #fff);
  box-sizing: border-box;
  width: 100%;
  border-radius: 0 0 10px 10px;
`

export const Card = ({ card, className }) => {
  return (
    <StyledCard className={className}>
      <Image></Image>
      <Title>{card.title}</Title>
    </StyledCard>
  )
}
