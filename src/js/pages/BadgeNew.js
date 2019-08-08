import React, {Component} from 'react'
import Badge from '../components/Badge.js'
import BadgeForm from '../components/BadgeForm'
import logo from '../../images/platziconf-logo.svg'
import api from '../../api.js'
import PageLoading from '../components/PageLoading'

class BadgeNew extends Component {

  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      avatarUrl: '',
      jobTitle: '',
      twitter: ''
    },
    loading: false,
    error: null
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ... this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({loading: true, error: null})

    try {
      await api.badges.create(this.state.form)
      this.setState({loading: false})
      this.props.history.push('/badges')
    }
    catch (error) {
      this.setState({loading: false, error: error})
    }
  }

  render() {

    if (this.state.loading) {
      return <PageLoading />
    }

    return (
      <React.Fragment>
        <div className="BadgeNew__hero d-flex justify-content-center">
          <img className="BadgeNew__hero__image" src={logo} alt=""/>
        </div>
        <div className="container mb-3">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                twitter={this.state.form.twitter || 'twitter'}
                email={this.state.form.email || 'E_MAIL'}
              />
            </div>
            <div className="col-6">
              <h1>New Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeNew