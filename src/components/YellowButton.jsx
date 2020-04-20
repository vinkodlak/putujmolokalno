import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-image: linear-gradient(to right, #ffb001, #fcc319);
  border: 0;
  border-radius: 10px;
  font: 700 20px/1.2 var(--sans);
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: box-shadow 0.15s; 
  
  ${props => !props.isHero && `
    padding: 12.5px 50px;
  `}

  &:hover {
    box-shadow: 
      var(--shadow),
      var(--shadow);
  }
`

export const YellowButton = ({ children, className, isHero }) => {
  return (
    <Button className={className} isHero={isHero}>
      {children}
    </Button>
  )
}
