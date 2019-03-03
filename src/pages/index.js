import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Oliver`, `Gore`]} />
    <h1>OLIVER GORE</h1>
    <p>Manchester</p>
  </Layout>
)

export default IndexPage
