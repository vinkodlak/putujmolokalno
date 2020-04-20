import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHero } from "../components/HomeHero"
import { IdejaDana } from "../components/IdejaDana"
import { PopularniDozivljaji } from "../components/PopularniDozivljaji"
import { SkriveneLokacije } from "../components/SkriveneLokacije"
import { KamoZaVikend } from "../components/KamoZaVikend"
import { Ljeto2020 } from "../components/Ljeto2020"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHero />
    <IdejaDana />
    <PopularniDozivljaji />
    <SkriveneLokacije />
    <KamoZaVikend />
    <Ljeto2020 />

  </Layout>
)

export default IndexPage
