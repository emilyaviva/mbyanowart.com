import React from "react"

import SiteHeader from "./site-header"
import SiteFooter from "./site-footer"
import "./layout.scss"

const Layout = children => (
  <div className="Layout">
    <SiteHeader />
    <main className="container is-fluid">{children}</main>
    <SiteFooter />
  </div>
)

export default Layout
