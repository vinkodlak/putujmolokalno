import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  min-width: 269px;
  background-image: linear-gradient(to right, #ffb001, #fcc319);
  border: 0;
  border-radius: 10px;
  font: 700 20px/1.2 var(--Lato);
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 3px 6px 0 rgba(0,0,0,0.16);
  transition: box-shadow 0.15s; 

  &:hover {
    box-shadow: 
      0 3px 6px 0 rgba(0,0,0,0.16),
      0 3px 6px 0 rgba(0,0,0,0.16);
  }
`

export const YellowButton = ({ children, className }) => {
  return (
    <Button className={className}>
      {children}
    </Button>
  )
}
