import React from 'react'
import styled from 'styled-components'

import { SectionTitle } from '../components/SectionTitle'
import { YellowButton } from '../components/YellowButton'

const Section = styled.section`
  display: grid;
  grid-template-columns: var(--innerGrid);
  gap: var(--innerGridGap);
  margin-top: 40px;
  margin-bottom: 73px;

  color: #3b3b3b;
`

const Article = styled.article`
  grid-column: 3 / span 7;

  h3 {
    font: 400 24px/32px var(--serif);
    margin: 0 0 31px 0;
  }

  p {
    font: var(--sans16);
    margin-bottom: 47px;
  }

  button {
    float: right;
  }
`

const Images = styled.div`
  grid-column: 11 / -3;
  border-radius: 10px;
  box-shadow: var(--shadow);
`

export const IdejaDana = () => {
  return (
    <Section>
      <SectionTitle>Ideja dana</SectionTitle>

      <Article>
        <h3>Rijeka: Što vidjeti i gdje popiti dobru kavu u gradu koji teče</h3>
        <p>Rijeka, odnosno grad koji teče, je treći najveći grad u Hrvatskoj i nadolazeća zvijezda u polju studentskih gradova. U njoj stvarno ima što za vidjeti.</p>
        <YellowButton>Istraži</YellowButton>
      </Article>

      <Images />

    </Section>
  )
}
