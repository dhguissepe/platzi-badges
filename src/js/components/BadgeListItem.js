import React from 'react'
import Gravatar from './Gravatar.js'

function BadgeListItem(props) {
  return (
    <div>
      <div className="fluid-container badge-list-element">
        <div className="avatar-row row m-0">
          <div className="avatar-col col-auto d-flex align-items-center">
            <Gravatar className="avatar" email={props.badge.email} alt=""/>
          </div>
          <div className="info-col col p-0 d-flex align-items-center">
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <h3 className="m-0 font-weight-bold">{props.badge.firstName} {props.badge.lastName}</h3>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="twitter m-0">@{props.badge.twitter}</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="m-0">{props.badge.jobTitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BadgeListItem