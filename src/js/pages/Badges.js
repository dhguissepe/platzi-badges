import React, {Component} from 'react'
import BadgesList from '../components/BadgesList.js'
import logo from '../../images/platziconf-logo.svg'
import { Link } from 'react-router-dom'
import api from '../../api.js'
import PageLoading from '../components/PageLoading.js'
import PageError from '../components/PageError.js'
import MiniLoader from '../components/MiniLoader.js'

class Badges extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      error: null,
      data: undefined,
      searchFilterValue: ''
    }
  }

  componentDidMount() {
    this.fetchData()

    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null })

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data })
    }
    catch(error) {
      this.setState({ loading:false, error: error })
    }
  }

  render() {

    if(this.state.loading === true && !this.state.data) {
      return <PageLoading />
    }

    if(this.state.error) {
      return <PageError error={this.state.error} />
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges__conf-logo"
                src={logo}
                alt="Conf Logo"
              />
            </div>
            <div className="search-filter form-group">
              <input
                placeholder="Filter Badge"
                type="text"
                className="form-control"
                value={this.state.searchFilterValue}
                onChange={e => {
                  this.setState({searchFilterValue: e.target.value})
                }}
              />
            </div>
          </div>
        </div>
        <div className="container-fluid mb-4">
        <div className="row">
            <div className="col d-flex flex-column flex-wrap mb-2">
              {this.state.loading &&
                <MiniLoader className="align-self-center"/>
              }
              {this.state.data.length > 0 &&
                <Link
                  to="/badges/new"
                  className="btn btn-primary align-self-end justify-content-center"
                >
                  New Badge
                </Link>
              }
            </div>
          </div>

          <div className="row">
              <BadgesList
                className="col-4 pl-2 pr-2 pt-0 pb-0"
                badges={ this.state.data }
                searchFilterValue={ this.state.searchFilterValue }
              />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Badges