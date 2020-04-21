import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.article`
  background: #fff;
  box-shadow: var(--shadow);
  border-radius: 10px;
`

const Image = styled.div`
  width: 160px;
  height: 160px;
  float: left;
  border-radius: 10px 0 0 10px;
`

const Meta = styled.div`
  background: #3b3b3b;
  color: #fff;
  margin-left: 160px;
  height: 160px;
  border-radius: 0 10px 10px 0;
  padding: 10px;
  box-sizing: border-box;
  display: grid;
`

const Title = styled.h3`
  font: var(--serif16);
  margin: 0 0 15px;
`
const Desc = styled.div`
  font: var(--sans16);
`
const Link = styled.div`
  align-self: end;
  justify-self: end;
  
  font: var(--sans16);
  color: var(--orange);
  text-transform: uppercase;
  text-decoration: underline;
  text-align: right;
  padding-right: 10px;
  cursor: pointer;
`

export const Card = ({ className, card }) => {
  return (
    <StyledCard className={className}>
      <Image></Image>
      <Meta>
        <Title>{card.title}</Title>
        <Desc>{card.desc}</Desc>
        <Link>Više</Link>
      </Meta>
    </StyledCard>
  )
}
