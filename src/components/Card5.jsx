import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.article`
  background: #d5d5d5;
  position: relative;
  height: 444px;
  box-shadow: var(--shadow);
  border-radius: 10px;
`

const Image = styled.div``
const Meta = styled.div`
  position: absolute;
  bottom: 0;
  height: 144px;
  padding: 50px 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: linear-gradient(to bottom, transparent, #fff);
  box-sizing: border-box;
  width: 100%;
  border-radius: 0 0 10px 10px;
`
const Title = styled.h3`
  margin: 0;
  font: var(--serif24);
  color: #3b3b3b;
`
const Link = styled.div`
  /* align-self: end;
  justify-self: end; */
  float: right;

  font: var(--sans16);
  color: var(--orange);
  text-transform: uppercase;
  text-decoration: underline;
  text-align: right;
  padding-right: 10px;
  cursor: pointer;
`
const Category = styled.header`
  font: var(--serif16);
  color: #fff;
  background-image: linear-gradient(to bottom, #0886a3, #0099bd);
  padding: 15px 20px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px 0 10px 0;
  text-transform: uppercase;
`

export const Card = ({ card, className }) => {
  return (
    <StyledCard className={className}>
      <Category>{card.category}</Category>
      <Image></Image>
      <Meta>
        <Title>{card.title}</Title>
        <Link>Više</Link>
      </Meta>

    </StyledCard>
  )
}
