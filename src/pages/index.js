import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHero } from "../components/HomeHero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHero />
    
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
