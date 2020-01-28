import React from "react"
import image from "../assets/img/website-icon.png"

export default function Navbar() {
  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
      </Navbar>
      <br />
      <Navbar bg="light">
        <Navbar.Brand>Brand text</Navbar.Brand>
      </Navbar>
      <br />
      <Navbar bg="dark">
        <Navbar.Brand href="#">
          <img
            src={image}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Navbar>
      <br />
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React Bootstrap
        </Navbar.Brand>
      </Navbar>
    </>
  )
}
