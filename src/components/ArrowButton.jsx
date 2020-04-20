import React from 'react'
import Arrow from '../images/arrow.inline.svg'
import styled from 'styled-components'

const Button = styled.button`
  border: none;
  background: url(${Arrow});
  width: 38px;
  height: 38px;
  outline: none;
  cursor: pointer;
  ${props => props.isRight && `
    transform: rotate(180deg);
  `}

  & + & {
    margin-left: 30px;
  }
`

export const ArrowButton = ({isRight, onClick}) => <Button isRight={isRight} onClick={onClick} />
