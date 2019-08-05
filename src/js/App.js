import React, {Component} from 'react'
import BadgeNew from './pages/BadgeNew.js'
import Badges from './pages/Badges.js'

class App extends Component {
  render() {
    return (
      <div>
        {/* <BadgeNew logo={this.props.logo} /> */}
        <Badges logo={this.props.logo} />
      </div>
    )
  }
}

export default App