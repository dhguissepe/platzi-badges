import React, {Component} from 'react'
import header from '../../images/badge-header.svg'
import Gravatar from '../components/Gravatar.js'
class Badge extends Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={header} alt="logo de la conferencia"/>
        </div>

        <div className="Badge__section-name">
          <Gravatar
            className="Badge__avatar"
            email={this.props.email}
            alt="avatar"
          />
          <h1 className="badge-name">{this.props.firstName} <br/> {this.props.lastName}</h1>
        </div>

        <div className="Badge__section-info">
          <h3 className="title">{this.props.jobTitle}</h3>
          <div className="badge-twitter">@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">
          #platziconf
        </div>
      </div>
    )
  }
}

export default Badge