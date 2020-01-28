import React from "react"

import config from "../../config"
import image from "../assets/img/website-icon.png"

export default function Header() {
  return (
    <header id="header">
      <img src={image} alt="logo" />
      <h1> {config.heading}</h1>
      <p>{config.subHeading}</p>
    </header>
  )
}
