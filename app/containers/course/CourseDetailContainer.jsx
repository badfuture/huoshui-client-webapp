import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import localStore from 'store'
import * as courseActions from '../../actions/courseActions'
import * as modalActions from '../../actions/modalActions'
import * as searchCourseActions from '../../actions/searchCourseActions'
import CourseDetail from '../../components/page/CourseDetail'

class CourseDetailContainer extends Component {
  componentDidMount() {
    this.props.fetchCourseById(this.props.match.params.id)
  }

  componentDidUpdate(prevProps) {
    const oldId = prevProps.match.params.id
    const newId = this.props.match.params.id
    if (newId !== oldId) { this.props.fetchCourseById(this.props.match.params.id) }
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
  openAddReviewModal: (courseId) => {
    if (localStore.get('user')) {
      dispatch(searchCourseActions.setCourseId(courseId))
      dispatch(modalActions.openAddReviewModal())
    } else {
      dispatch(modalActions.openPromptSignupModal())
    }
  },
})

export default connect(mapStateToProps, mapActionToProps)(CourseDetailContainer)
