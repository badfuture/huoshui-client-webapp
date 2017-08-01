import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as statActions from '../../actions/statActions'
import StatSite from '../../components/stat/StatSite'

class StatSiteContainer extends Component {
  componentDidMount() {
    this.props.fetchStat()
  }

  render() {
    return (
      <StatSite {...this.props} />
    )
  }
}

// map redux states to prop
const mapStateToProps = state => ({
  data: state.stat.data,
  count: state.stat.data.count,
  isFetching: state.stat.isFetching,
})

// map redux actions to prop
const mapActionToProps = dispatch => ({
  fetchStat: () => dispatch(statActions.fetchStat()),
})

export default connect(mapStateToProps, mapActionToProps)(StatSiteContainer)
