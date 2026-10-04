import React from "react"
import PropTypes from "prop-types"

const Layout = ({ children }) => <div className="site-shell">{children}</div>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
