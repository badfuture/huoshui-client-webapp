import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import localStore from 'store'
import * as courseActions from '../../actions/courseActions'
import * as modalActions from '../../actions/modalActions'
import * as searchCourseActions from '../../actions/searchCourseActions'
import CourseDetail from '../../components/page/CourseDetail'
import openPopup from '../../utils/openSharePopup'
import socialShare from '../../utils/socialShare'

class CourseDetailContainer extends Component {

  componentDidMount() {
    this.props.fetchCourseById(this.props.match.params.id)
  }

  componentDidUpdate(prevProps) {
    const oldId = prevProps.match.params.id
    const newId = this.props.match.params.id
    if (newId !== oldId) { this.props.fetchCourseById(this.props.match.params.id) }
  }

  shareToQQ = () => {
    const popup = openPopup('qq', socialShare.getQQUrl({
      url: `https://m.huoshui.org/courses/${this.props.course.id}`,
      title: `${this.props.course.Prof.name} 的 ${this.props.course.name}`,
      summary: `${this.props.course.Reviews[0].text}`,
    }))
  }

  shareToWeibo = () => {
    const popup = openPopup('weibo', socialShare.getWeiboUrl({
      url: `https://m.huoshui.org/courses/${this.props.course.id}`,
      title: `活水课评：${this.props.course.Prof.name} 的 ${this.props.course.name}`,
    }))
  }

  render() {
    return (
      <div className="container-main-grey">
        <Container>
          <CourseDetail
            {...this.props}
            shareToQQ={this.shareToQQ}
            shareToWeibo={this.shareToWeibo}
          />
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
