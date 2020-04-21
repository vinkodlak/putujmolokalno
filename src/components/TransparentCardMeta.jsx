import React from 'react'
import styled from 'styled-components'

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

export const TransparentCardMeta = ({ children, className }) => {
  return (
    <Meta className={className}>
      {children}
    </Meta>
  )
}
