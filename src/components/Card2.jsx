import React from 'react'
import styled from 'styled-components'

import { YellowButton } from './YellowButton'
import { TransparentCardMeta } from './TransparentCardMeta'

const StyledCard = styled.article`
  border-radius: 10px;
  background: #fff;
  height: 671px;
  position: relative;
  box-shadow: var(--shadow);
`

const StyledMeta = styled(TransparentCardMeta)`
  height: auto;
  display: block;
  color: #fff;
`

const Title = styled.h3`
  font: var(--serif16);
  margin: 0 0 16px;
`

const Desc = styled.div`
  font: var(--sans16);
  margin: 0 0 16px;
`

const Button = styled(YellowButton)`
  float: right;
  margin: 0 20px 6px 0;
`

const Image = styled.div``

export const Card = ({ card, className }) => {
  return (
    <StyledCard className={className}>
      <Image></Image>
      <StyledMeta>
        <Title>{card.title}</Title>
        <Desc>{card.desc}</Desc>
        <Button>Istraži</Button>
      </StyledMeta>
    </StyledCard>
  )
}
