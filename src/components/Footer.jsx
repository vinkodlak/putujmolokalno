import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Facebook from '../images/icon-facebook.inline.svg'
import Instagram from '../images/icon-instagram.inline.svg'
import Youtube from '../images/icon-youtube.inline.svg'

const social = [
  { icon: Facebook, link: 'https://www.facebook.com/groups/653339188113854' },
  { icon: Instagram, link: 'https://www.instagram.com/travel_advisory/' },
  { icon: Youtube, link: 'https://www.youtube.com/channel/UCha4eD6x7Ax_FTtiw7D_prg' },
]

const StyledFooter = styled.footer`
  background: #3b3b3b;
  color: #fff;
  font: var(--sans20);
  display: grid;
  grid-template-columns: var(--mainGrid);
`

const Wrap = styled.div`
  grid-column: 2 / -2;
  display: grid;
  grid-template-columns: var(--innerGrid);
  gap: var(--innerGridGap);
`

const Logo = styled.div`
  grid-column: 1 / span 8;
  margin: 38px 0 0 -20px;
`
const Menu = styled.div`
  margin-top: 61px;
  grid-column: 9 / span 8;
`

const MenuTitle = styled.div`
  margin-bottom: 20px;
`
const MenuItem = styled.div`
  margin-bottom: 10px;
`

const Social = styled.div`
  margin-top: 61px;
  grid-column: 17 / span 8;
`

const SocialLinks = styled.div`
  padding-top: 10px;
  display: flex;
  align-items: center;
`
const SocialItem = styled.a`
  &:not(:last-of-type) {
    margin-right: 30px;
  }
`

const Copyright = styled.div`
  grid-column: 1 / -1;
  margin: 29px 0 24px;
  justify-self: end;
`

export const Footer = () => {
  return (
    <StyledFooter className="full">
      <Wrap>
        <Logo>
          <Link to={`/`}><img src={'/images/Travel-Advisor-Logo.png'} alt="" /></Link>
        </Logo>
        <Menu>
          <MenuTitle>Travel Advisor</MenuTitle>
          <MenuItem>Putovanja</MenuItem>
          <MenuItem>Hrana & vino</MenuItem>
          <MenuItem>Galerija</MenuItem>
          <MenuItem>zgtraveladvisor@gmail.com</MenuItem>
        </Menu>
        <Social>
          <MenuTitle>Pratite nas</MenuTitle>
          <SocialLinks>
            {social.map((item, index) => (
              <SocialItem href={item.link} target="_blank" rel="noopener noreferrer"><img src={item.icon} alt="" /></SocialItem>
            ))}
          </SocialLinks>
        </Social>
        <Copyright>&copy; 2020 Travel advisor. Sva prava zadržana.</Copyright>
      </Wrap>
    </StyledFooter>
  )
}
