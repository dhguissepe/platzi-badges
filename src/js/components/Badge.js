import React, {Component} from 'react'
import confLogo from '../../images/badge-header.svg'

class Badge extends Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="logo de la conferencia"/>
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="avatar"/>
          <h1 className="badge-name">Richard <br/> Kaufman</h1>
        </div>

        <div className="Badge__section-info">
          <h3 className="title">Frontend Engineer</h3>
          <div className="badge-twitter">@sparragus</div>
        </div>

        <div className="Badge__footer">
          #platziconf
        </div>
      </div>
    )
  }
}

export default Badge