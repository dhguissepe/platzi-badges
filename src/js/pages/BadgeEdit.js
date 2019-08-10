import React, {Component} from 'react'
import Badge from '../components/Badge.js'
import BadgeForm from '../components/BadgeForm'
import logo from '../../images/platziconf-logo.svg'
import api from '../../api.js'
import PageLoading from '../components/PageLoading'

class BadgeEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        avatarUrl: '',
        jobTitle: '',
        twitter: ''
      },
      loading: true,
      error: null
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null })

    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      );
      this.setState({ loading: false, form: data })
    }
    catch(error) {
      this.setState({ loading:false, error: error })
    }
  }

  handleChange = (e) => {

    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({loading: true, error: null})

    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form)
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
        <div className="BadgeEdit__hero d-flex justify-content-center">
          <img className="BadgeEdit__hero__image" src={logo} alt=""/>
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
              <h1>Edit Attendant</h1>
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

export default BadgeEdit