import React, {Component} from 'react'
import logoConf from '../../images/platziconf-logo.svg'
import Badge from '../components/Badge.js'
import { Link } from 'react-router-dom'
import PageLoading from '../components/PageLoading.js'
import PageError from '../components/PageError.js'
import api from '../../api.js'

class BadgeDetails extends Component {

  state= {
    loading: true,
    error: null,
    data: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: ''
    }
  }

  handleClick(e) {
    e.preventDefault()
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null
    })
    try {
      const data = await api.badges.read(this.props.match.params.badgeId)
      this.setState({
        loading: false,
        data: data,
      })
    } catch(error) {
      this.setState({
        loading: false,
        error: error
      })
    }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />
    }

    return (
      <React.Fragment>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <img src={logoConf} alt=""/>
              </div>
              <div className="col d-flex align-items-center justify-content-center">
                <h1>{this.state.data.firstName} {this.state.data.lastName}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-4">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.data.firstName || 'FIRST_NAME'}
                lastName={this.state.data.lastName || 'LAST_NAME'}
                jobTitle={this.state.data.jobTitle || 'JOB_TITLE'}
                twitter={this.state.data.twitter || 'twitter'}
                email={this.state.data.email || 'E_MAIL'}
              />
            </div>
            <div className="col d-flex flex-column justify-content-center align-items-center">
              <h2 className="mb-4">Actions</h2>
              <Link
                className="BadgeDetails__buttons__edit btn btn-primary mb-3"
                to={`${this.props.match.url}/edit`}
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