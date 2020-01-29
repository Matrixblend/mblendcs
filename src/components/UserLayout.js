import React, { Component } from "react"
import PropTypes from "prop-types"
import Navbar from "./Navbar"
import "../assets/sass/main.scss"
import SEO from "./SEO"
import Footer from "./Footer"

class UserLayout extends Component {
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
        <Navbar />
        <div className={isPreloaded ? "main-body is-preload" : "main-body"}>
          {children}
        </div>
        <Footer />
      </>
    )
  }
}

UserLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default UserLayout
