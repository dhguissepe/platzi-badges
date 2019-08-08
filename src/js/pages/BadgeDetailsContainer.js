import React, {Component} from 'react'
import PageLoading from '../components/PageLoading.js'
import PageError from '../components/PageError.js'
import BadgeDetails from './BadgeDetails.js'
import api from '../../api.js'

class BadgeDetailsCC extends Component {

  state= {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false
  }

  badgeId = this.props.match.params.badgeId

  handleOpenModal= e => {
    e.preventDefault()
    this.setState({ modalIsOpen: true })
  }

  handleCloseModal = e => {
    e.preventDefault()
    this.setState({ modalIsOpen: false })
  }

  handleDeleteBadge = async e => {
    e.preventDefault()
    this.setState({
      loading: true,
      error: null,
      modalIsOpen: false
    })

    try {
      await api.badges.remove(this.badgeId)
      this.setState({ loading: false })
      this.props.history.push('/badges')

    } catch(error) {
      this.setState({
        loading: false,
        error: error
      })
    }
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
      const data = await api.badges.read(this.badgeId)
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
      <BadgeDetails
        badge={ this.state.data }
        badgeUrl={ this.props.match.url }
        onOpenModal={ this.handleOpenModal }
        onDeleteBadge={ this.handleDeleteBadge }
        onCloseModal={ this.handleCloseModal }
        modalIsOpen={ this.state.modalIsOpen }
      />
    )
  }
}

export default BadgeDetailsCC