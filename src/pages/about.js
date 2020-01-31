import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import NavBar from "../components/Navbar"

export default props => (
  <div>
    <NavBar />
    <Header />

    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-xs-6">
          <h1>{props.data.markdownRemark.frontmatter.title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          ></div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
)

export const query = graphql`
  {
    markdownRemark {
      html
      frontmatter {
        title
      }
    }
  }
`
