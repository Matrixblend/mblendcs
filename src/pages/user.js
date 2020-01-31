import React from "react"
import UserLayout from "../components/UserLayout"
import PropTypes from 'prop-types'

let props = {}
export default (props) => (
  <UserLayout>
    <h1>Welcome to Matrixblend Media. </h1>
    {/* <p dangerouslySetInnerHTML={{ __html: props.state.message }}></p> */}

    <p>
      You will be receiving an email with a link to the ebook that is a guide to
      your creative journey.{" "}
    </p>
    <p>
      In this ebook I reveal under reconginzed tools and strategies that work.
      You will find small hustles that can get you earning extra money, all
      while keeping your creative integrity.
    </p>
    <p>Matrixblend Media will keep you inspired with insights and ideas.</p>
  </UserLayout>
)
props.propTypes = {
message : PropTypes.object
}
