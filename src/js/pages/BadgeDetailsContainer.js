import React, {Component} from 'react'
import PageLoading from '../components/PageLoading.js'
import PageError from '../components/PageError.js'
import BadgeDetails from './BadgeDetails.js'
import api from '../../api.js'

class BadgeDetailsCC extends Component {

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
      return <PageError error={ this.state.error } />
    }

    return (
      <BadgeDetails badge={ this.state.data } badgeUrl={ this.props.match.url } />
    )
  }
}

export default BadgeDetailsCC