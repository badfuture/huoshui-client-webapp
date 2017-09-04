import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as courseActions from '../../actions/courseActions'
import GridCourse from '../../components/grid/GridCourse'
import Spinner from '../../components/spinner/Spinner'

class SegmentHotCourse extends Component {
  componentDidMount() {
    this.props.fetchHotCourses()
  }
  render() {
    if (this.props.isFetching) {
      return (<div style={{ marginTop: '3em' }}>
        <Spinner />
      </div>)
    }
    return (
      <GridCourse
        items={this.props.courses.data.slice(0, 6)}
        itemsPerRow={3}
        history={this.props.history}
      />
    )
  }
}

// maps state from store to props
const mapStateToProps = state => ({
  courses: state.hotCourses,
  isFetching: state.hotCourses.isFetching,
})

// maps actions to props
const mapActionToProps = dispatch => ({
  fetchHotCourses: () => dispatch(courseActions.fetchHotCourses()),
})

export default connect(mapStateToProps, mapActionToProps)(SegmentHotCourse)
