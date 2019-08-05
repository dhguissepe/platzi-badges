import React, {Component} from 'react'

class BadgesList extends Component {
  render() {
    return(
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id}>
              <div className="fluid-container badge-list-element">
                <div className="avatar-row row m-0">
                  <div className="avatar-col col-auto d-flex align-items-center pl-2 pr-2">
                    <img className="avatar" src={badge.avatarUrl} alt=""/>
                  </div>
                  <div className="info-col col p-0 d-flex align-items-center">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col">
                          <h3 className="m-0 font-weight-bold">{badge.firstName} {badge.lastName}</h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <p className="twitter m-0">@{badge.twitter}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <p className="m-0">{badge.jobTitle}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default BadgesList