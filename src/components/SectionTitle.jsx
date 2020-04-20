import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  grid-column: 1 / -1;
  color: #3b3b3b;
  font: 400 24px/32px var(--serif);
  margin: 0 0 25px;

  &:after {
    content: '';
    display: block;
    background: #3b3b3b;
    width: 79px;
    height: 1px;
    margin-top: 5px;
  }
`

export const SectionTitle = ({ children }) => {
  return (
    <Title>
      {children}
    </Title>
  )
}
