import React, { Component } from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

// import '../../static/css/base.css'
class NavBar extends Component {
  constructor (props) {
    super(props)

    // init component state here
    this.state = {}
  }

  render () {
    return (
      <div id="navBar">
        <Link to={prefixLink('/')}><div className="navBar-item">| Home |</div></Link>
        <Link to={prefixLink('/contactMe/')}><div className="navBar-item">| Contact Me |</div></Link>
      </div>

    )
  }
}

export default NavBar
