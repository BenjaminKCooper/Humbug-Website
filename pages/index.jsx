import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import NavBar from '../components/NavBar'
import WelcomePageCenter from '../components/WelcomPageCenter'

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <NavBar />
          <WelcomePageCenter />
        </div>
      </DocumentTitle>
    )
  }
}
