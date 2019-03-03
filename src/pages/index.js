import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./home.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Oliver`, `Gore`]} />
    <div className={styles.homeContent}>
      <div>
        <h1>OLIVER GORE</h1>
        <p>Manchester</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
