import React from "react"
import UserLayout from "../components/UserLayout"

export default props => (
  <UserLayout>
    <h1>Welcome to the User Page</h1>
    <p>Your User name is {props.email}</p>
    <p>Please check your email for our latest mailing.</p>
    <p>
      Below is a list of services that we provide to help speed up your
      development process
    </p>
    <p>Fiverr, </p>
    <p>
      This is the begining portal of the Matrixblend universe. As we grow you
      will dicover more tools that you can use
      immedatelybundleRenderer.renderToStream
    </p>
    <p>Matrixblend Media will keep you inspired with insights and ideas.</p>
  </UserLayout>
)
