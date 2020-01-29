import React, { Component } from "react"
import PropTypes from "prop-types"

import "../assets/sass/main.scss"
import SEO from "./SEO"
import Footer from "./Footer"

class Layout extends Component {
  constructor() {
    super()
    this.state = {
      isPreloaded: true,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isPreloaded: false })
    }, 100)
  }

  render() {
    const { children } = this.props
    const { isPreloaded } = this.state
    return (
      <>
        <SEO />
        <div className={isPreloaded ? "main-body is-preload" : "main-body"}>
          {children}
        </div>
        <Footer />
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
