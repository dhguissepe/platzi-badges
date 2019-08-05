import React, {Component} from 'react'

class Badge extends Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={this.props.logo} alt="logo de la conferencia"/>
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src={this.props.avatar} alt="avatar"/>
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