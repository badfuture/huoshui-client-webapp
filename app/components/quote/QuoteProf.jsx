import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Feed, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../../components/spinner/Spinner'
import styles from './QuoteProf.scss'
import { URL_RANDOM_PROF } from '../../constants/ApiEndpoints'

class QuoteProf extends Component {
  constructor() {
    super()
    this.state = {
      isFetching: false,
      prof: null,
    }
  }

  componentDidMount() {
    this.setState({ isFetching: true })
    axios.get(`${URL_RANDOM_PROF}`)
    .then((res) => {
      this.setState({
        prof: res.data,
        isFetching: false,
      })
    })
  }

  render() {
    const { prof } = this.state
    let image = ''
    if (prof) {
      image = prof.avatar
    }

    if (!this.state.prof) {
      return (
        <div style={{ marginTop: '3em' }}>
          <Spinner />
        </div>
      )
    }
    return (
      <div>
        <Feed style={{ marginBottom: '0.75em' }}>
          <Feed.Event>
            <Feed.Label image={image} />
            <Feed.Content style={{ marginLeft: '0.30em' }}>
              <Feed.Summary>
                <Link
                  to={`/profs/${prof.id}`}
                  style={{ color: 'rgba(33, 133, 208, 0.8)' }}
                >
                  { prof && prof.name}
                </Link>
                <Feed.Date>
                  {
                    (prof && prof.Depts && prof.Depts[0]) &&
                    prof.Depts[0].shortname
                  }
                </Feed.Date>
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
        </Feed>
        <span className={styles.description}>
          { prof && prof.motto}
        </span>
      </div>
    )
  }
}

// map redux states to prop
const mapStateToProps = state => ({
})

// map redux actions to prop
const mapActionToProps = dispatch => ({
})

export default connect(mapStateToProps, mapActionToProps)(QuoteProf)
