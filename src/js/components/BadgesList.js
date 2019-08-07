import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BadgeListItem from './BadgeListItem.js'
class BadgesList extends Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div className="container text-center">
          <p className="m-4 p-4">Not badges found</p>
          <Link className="btn btn-primary"to="/badges/new" >Add new badge</Link>
        </div>
      )
    }
    return(
      <React.Fragment>
        {this.props.badges.map((badge) => {
          return (
            <Link to={`/badges/${badge.id}/edit`} className="text-reset text-decoration-none col-4 pl-2 pr-2 pt-0 pb-0"key={badge.id}>
              <BadgeListItem badge={badge}/>
            </Link>
          )
        })}
      </React.Fragment>
    )
  }
}

export default BadgesList