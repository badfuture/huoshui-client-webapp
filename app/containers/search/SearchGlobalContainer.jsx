
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as searchGlobalActions from '../../actions/searchGlobalActions'
import SearchGlobal from '../../components/search/SearchGlobal'

class SearchGlobalContainer extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <SearchGlobal {...this.props} />
    )
  }
}

// maps state from store to props
const mapStateToProps = state => ({
  searchGlobal: state.searchGlobal,
  options: state.searchGlobal.options,
  valueDisplayed: state.searchGlobal.valueDisplayed,
  isFetching: state.searchGlobal.isFetching,
  optionSelected: state.searchGlobal.optionSelected,
})

// maps actions to props
const mapActionToProps = dispatch => ({
  resetComponent: () => dispatch(searchGlobalActions.resetComponent()),
  handleSearchChange: (e, value) => dispatch(searchGlobalActions.handleSearchChange(e, value)),
  handleOptionSelect: (e, option) => dispatch(searchGlobalActions.handleOptionSelect(e, option)),
})

export default connect(mapStateToProps, mapActionToProps)(SearchGlobalContainer)
