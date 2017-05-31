import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import * as courseActions from '../../actions/courseActions'
import CourseDetail from '../../components/page/CourseDetail'

class CourseDetailContainer extends Component {
  componentDidMount() {
    this.props.fetchCourseById(this.props.match.params.id)
  }

  render() {
    return (
      <div className="container-main-grey">
        <Container>
          <CourseDetail {...this.props} />
        </Container>
      </div>
    )
  }
}

// map redux states to prop
const mapStateToProps = state => ({
  course: state.course.data,
  isFetching: state.course.isFetching,
})

// map redux actions to prop
const mapActionToProps = dispatch => ({
  fetchCourseById: courseId => dispatch(courseActions.fetchCourseById(courseId)),
})

export default connect(mapStateToProps, mapActionToProps)(CourseDetailContainer)
