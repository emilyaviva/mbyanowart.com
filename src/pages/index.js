import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Seattle Moshav" />
    <div className="is-hidden-mobile" style={{ padding: `2rem 0` }} />
    <h1 className="title is-1 has-text-centered">Michele Yanow, Artist</h1>
    <h2 className="subtitle is-3 has-text-centered">
      Landscapes, Watercolors, Other Stuff
    </h2>
  </Layout>
)

export default IndexPage
