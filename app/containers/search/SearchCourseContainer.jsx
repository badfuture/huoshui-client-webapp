
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as searchCourseActions from '../../actions/searchCourseActions'
import SearchCourse from '../../components/search/SearchCourse'

class SearchCourseContainer extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <SearchCourse {...this.props} />
    )
  }
}

// maps state from store to props
const mapStateToProps = state => ({
  searchCourse: state.searchCourse,
  options: state.searchCourse.options,
  valueDisplayed: state.searchCourse.valueDisplayed,
  isFetching: state.searchCourse.isFetching,
  optionSelected: state.searchCourse.optionSelected,
})

// maps actions to props
const mapActionToProps = dispatch => ({
  resetComponent: () => dispatch(searchCourseActions.resetComponent()),
  handleSearchChange: (e, value) => dispatch(searchCourseActions.handleSearchChange(e, value)),
  handleOptionSelect: (e, option) => dispatch(searchCourseActions.handleOptionSelect(e, option)),
})

export default connect(mapStateToProps, mapActionToProps)(SearchCourseContainer)
