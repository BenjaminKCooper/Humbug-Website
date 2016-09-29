import React, { Component } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'


class WelcomePageCenter extends Component {
  constructor (props) {
    super(props)

    // init component state here
    this.state = {}
  }

  render () {
    return (
      <div id="center">
        <h1>Welcome. What about me would you like to learn?</h1>
        <div id="center-main">
          <div id="center-sub-a">
            My Research
            <Link to={prefixLink('/researchHomePage/')}>
            test
            </Link>
          </div>
          <div id="center-sub-b">
            My Work
          </div>
          <div id="center-sub-c">
            My Life
          </div>
        </div>
      </div>

    )
  }
}

// http://res.cloudinary.com/dartpark/video/upload/v1473823246/Animation_Submission_rcfjnp.mp4

export default WelcomePageCenter
