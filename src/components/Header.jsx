import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledHeader = styled.header`
  position: fixed;
  height: 118px;
  width: 100%;
  background-image:
    linear-gradient(to bottom, #fff, transparent),
    linear-gradient(to bottom, #fff, transparent);
  display: grid;
  grid-template-columns: var(--mainGrid);
  z-index: 100;
  pointer-events: none;
`

const HeaderWrap = styled.div`
  grid-column: 2 / -2;
  display: flex;
  justify-content: space-between;
`

const Logo = styled.div`
  pointer-events: initial;
  margin-left: -20px;
`
const Menu = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style-type: none;
  font: var(--sans20);
`
const MenuLink = styled.li`
  text-transform: uppercase;
  margin-top: 25px;
  cursor: pointer;
  pointer-events: initial;

  &:not(:last-of-type) {
    margin-right: 40px;
  }
`

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderWrap>
        <Logo>
          <Link to={`/`}><img src={'/images/Travel-Advisor-Logo.png'} alt="" /></Link>
        </Logo>
        <Menu>
          <MenuLink>Putovanja</MenuLink>
          <MenuLink>Hrana & vino</MenuLink>
          <MenuLink>Kupanje</MenuLink>
        </Menu>
      </HeaderWrap>
    </StyledHeader>
  )
}
