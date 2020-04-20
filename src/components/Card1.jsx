import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.article`
  border-radius: 10px;
  background: #d5d5d5;
  width: 269px;
  height: 444px;
  position: relative;

  margin-right: 30px;
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
const Meta = styled.main`
  background: rgba(59, 59, 59, 0.7);
  padding: 10px 15px;
  position: absolute;
  height: 132px;
  bottom: 0;
  border-radius: 0 0 10px 10px;
  font: var(--sans16);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Image = styled.div`
`
const Desc = styled.div`
  color: #fff;
`
const Link = styled.div`
  color: var(--orange);
  text-transform: uppercase;
  text-decoration: underline;
  text-align: right;
  padding-right: 10px;
  cursor: pointer;
`

export const Card = ({card}) => {
  return (
    <StyledCard>
      <Category>{card.title}</Category>
      <Image></Image>
      <Meta>
        <Desc>{card.desc}</Desc>
        <Link>Više</Link>
      </Meta>
    </StyledCard>
   )
}
