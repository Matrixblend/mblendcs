import React, { Component, navigate } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

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
        // this.setState(data.msg[0]);

        this.setState({ message: data.msg })
      } else {
        // confirm
        this.setState({ message: data.msg })
        navigate("/confirm",
          {replace: true}
        )
      }
      setTimeout(() => {
        this.setState({ message: "" })
      }, 3000)
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

        <input type="submit" value="Sign Up" />
        <span className={`${message ? "visible success" : ""} message`}>
          <span dangerouslySetInnerHTML={{ __html: message }} />
        </span>
      </form>
    )
  }
}

export default EmailForm
