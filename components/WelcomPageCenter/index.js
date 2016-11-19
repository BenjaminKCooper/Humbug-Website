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
        <div id="center-title">Welcome to Humbug Chapbook</div>
        <div id="center-main">
          <div id="center-sub">
            <div id="center-sub-component">Publications</div>
            <div id="center-sub-component">About the Writers</div>
            <div id="center-sub-component">Contact Us</div>
          </div>
        </div>
      </div>

    )
  }
}


export default WelcomePageCenter
