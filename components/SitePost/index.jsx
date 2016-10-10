import React from 'react'
import moment from 'moment'
import { RouteHandler, Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import ReadNext from '../ReadNext'
import './style.css'
import NavBar from '../../components/NavBar'
import '../../static/css/highlight.css'

class SitePost extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data
    const home = (
        <div>
          <Link className="gohome" to={prefixLink('/blogHomePage/')}> All Articles
          </Link>
        </div>
        )

    return (
            <div>
              <NavBar />
              { home }
              <div className="blog-single">
                <div className="text">
                  <div className="title"><h1>{ post.title }<h2>Published { moment(post.datePublished).format('MMM D, YYYY') }</h2></h1></div>
                  <hr />
                  <div dangerouslySetInnerHTML={{ __html: post.body }} />
                </div>
                <div className="footer">
                  <ReadNext post={post} {...this.props} />
                  <hr />
                  <p>
                    { config.siteDescr }
                    <a href={config.siteGithubUrl}>
                      <br /> <strong>{ config.siteAuthor }</strong> on <i className="fa fa-github" aria-hidden="true" /></a>
                  </p>
                </div>
              </div>
            </div>
            )
  }
}

SitePost.propTypes = {
  post: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array,
}

export default SitePost
