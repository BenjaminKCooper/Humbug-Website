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
        <div id="center-title">Welcome. What about me would you like to learn?</div>
        <div id="center-main">
          <div id="center-sub">
            <div id="center-sub-component"><Link to={prefixLink('/researchHomePage/')}>My Research</Link></div>
            <div id="center-sub-component">My Work</div>
            <div id="center-sub-component">My Life</div>
          </div>
        </div>
      </div>

    )
  }
}


export default WelcomePageCenter
