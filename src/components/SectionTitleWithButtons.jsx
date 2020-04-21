import React from 'react'
import styled from 'styled-components'

import { SectionTitle } from './SectionTitle'
import { ArrowButton } from './ArrowButton'

const TitleBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const StyledSectionTitle = styled(SectionTitle)`
  grid-column: 1;
`
const Buttons = styled.div`
  grid-column: 2;
  justify-self: end;
`

export const SectionTitleWithButtons = ({className, children, prev, next}) => {
  return (
    <TitleBar className={className}>
      <StyledSectionTitle>{children}</StyledSectionTitle>

      <Buttons>
        <ArrowButton onClick={prev} />
        <ArrowButton isRight onClick={next} />
      </Buttons>

    </TitleBar>
  )
}
