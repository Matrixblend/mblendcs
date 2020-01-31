import React from "react"

import Layout from "../components/Layout"
import Header from "../components/Header"
import EmailForm from "../components/EmailForm"
import SlideShow from "../components/SlideShow"
import Navbar from "../components/Navbar"
var settings = {
  images: [
    { url: require("../assets/images/bg01.jpg"), position: "center" },
    { url: require("../assets/images/bg02.jpg"), position: "center" },
    { url: require("../assets/images/bg03.jpg"), position: "center" },
  ],
  // Delay.
  delay: 6000,
}

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <EmailForm />

    <SlideShow settings={settings} />
  </Layout>
)

export default IndexPage
