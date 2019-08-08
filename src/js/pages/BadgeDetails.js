import React, {Component} from 'react'
import logoConf from '../../images/platziconf-logo.svg'
import Badge from '../components/Badge.js'
import { Link } from 'react-router-dom'

class BadgeDetails extends Component {

  render() {
    const badge = this.props.badge
    return (
      <React.Fragment>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <img src={logoConf} alt=""/>
              </div>
              <div className="col d-flex align-items-center justify-content-center">
                <h1>{badge.firstName} {badge.lastName}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="BadgeDetails__content-container mb-4">
          <div className="row">
            <div className="col-6 offset-1 pl-4 pr-4">
              <Badge
                firstName={badge.firstName || 'FIRST_NAME'}
                lastName={badge.lastName || 'LAST_NAME'}
                jobTitle={badge.jobTitle || 'JOB_TITLE'}
                twitter={badge.twitter || 'twitter'}
                email={badge.email || 'E_MAIL'}
              />
            </div>
            <div className="BadgeDetails__buttons col-auto d-flex flex-column justify-content-center align-items-center">
              <h2 className="mb-4">Actions</h2>
              <Link
                className="BadgeDetails__buttons__edit btn btn-primary mb-3"
                to={`${this.props.url}/edit`}
              >
                Edit
              </Link>
              <button
                className="BadgeDetails__buttons__delete btn btn-danger mb-3"
                onClick={this.handleCLick}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeDetails