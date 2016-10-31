import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import NavBar from '../components/NavBar'
import WelcomePageCenter from '../components/WelcomPageCenter'

// <div>Research Email: <a href="mailto:benjamin.k.cooper.18@dartmouth.edu">benjamin.k.cooper.18@dartmouth.edu</a></div>
// <div>Work Email: <a href="mailto:benjaminkagancooper@gmail.com">benjaminkagancooper@gmail.com</a></div>
// <img id="contactMe-sub" src={prefixLink('./photo.jpg')} width="15%" />

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <NavBar />
            <div id="contactMe-center">
              <br />
              <h1>Benjamin Cooper</h1>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}
