import React, { Component } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { navigate } from "@reach/router"

export class EmailForm extends Component {
  constructor() {
    super()
    this.state = { message: "" }
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    e.stopPropagation()
    let email = e.target.email.value
    let fields = { FNAME: e.target.fname }

    addToMailchimp(email, {
      fields,
    }).then(data => {
      if (data.result === "error") {
        // if message mentioned already subcribed send user to auth page with email address matched to the mailchimp data.
        let subscribed = data.msg.match(/subscrib/g)
        let tooMany = data.msg.match(/too/g)
        if (subscribed) {
          navigate("/user", {
            state: { message: data.msg, email: email },
            replace: true,
          })
        }
        if (tooMany) {
        }

        this.setState({ message: data.msg })
      } else {
        // confirm
        this.setState({ message: data.msg })
        navigate("/user", { state: { message: data.msg }, replace: true })
      }
    })
  }

  render() {
    const { message } = this.state
    return (
      <form id="signup-form" onSubmit={this.onSubmit} method="post" action="#">
        <input type="text" name="FNAME" id="text" placeholder="Name" />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />

        {/* <input type="submit" value="Sign Up" /> */}
        <span className={`${message ? "visible success" : ""} message`}>
          <span dangerouslySetInnerHTML={{ __html: message }} />
        </span>
      </form>
    )
  }
}

export default EmailForm
