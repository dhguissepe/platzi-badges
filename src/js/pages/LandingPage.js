import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/platziconf-logo.svg'
import astronauts from '../../images/astronauts.svg'

function LandingPage() {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto d-flex flex-column justify-content-center">
            <img className="home__logo" src={logo} alt="logo"/>
            <h1 className="home__title text-uppercase text-center mt-4">Print Your Badges</h1>
            <p className="home__description">The easiest way to manage your <br />conference</p>
            <Link to="/badges" className="btn--home btn btn-primary align-self-center">Start Now</Link>
          </div>
          <div className="astronauts-wrapper col-auto">
            <img className="astronauts" src={ astronauts } alt="astronauts"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage