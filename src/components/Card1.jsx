import React from 'react'
import styled from 'styled-components'

import { TransparentCardMeta } from './TransparentCardMeta'

const StyledCard = styled.article`
  border-radius: 10px;
  background: #d5d5d5;
  width: 269px;
  height: 444px;
  position: relative;
  box-shadow: var(--shadow);

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
      <TransparentCardMeta>
        <Desc>{card.desc}</Desc>
        <Link>Više</Link>
      </TransparentCardMeta>
    </StyledCard>
   )
}
