import React from "react"
import { Link } from "gatsby"

export default () => (
  <footer
    className="footer columns"
    style={{ position: `fixed`, left: 0, bottom: 0, width: `100%` }}
  >
    <p className="column has-text-left">
      <Link to="/">© Michele Yanow</Link>
    </p>
    <p className="column has-text-right">
      <a href="https://github.com/emilyaviva/mbyanowart.com/">
        This website is open-source
      </a>
    </p>
  </footer>
)
