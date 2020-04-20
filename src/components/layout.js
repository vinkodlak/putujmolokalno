import React from "react"
import styled from 'styled-components'

import "../style/style.scss"

import { Header } from './Header'

const Layout = styled.div`
  display: grid;
  grid-template-columns: var(--mainGrid);

  &>* {
    grid-column: 2 / -2;
  }

  &>.full {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: var(--mainGrid);
  }
`

export default ({ children }) => {

  return (
    <>
      <Header />
      <Layout>
        {children}
      </Layout>
    </>
  )
}