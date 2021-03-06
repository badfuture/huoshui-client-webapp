import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import localStore from 'store'
import Axios from 'axios'
import { URL_USER } from '../../constants/ApiEndpoints'
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

  likeCourse = () => {
    const user = localStore.get('user')
    Axios.put(`${URL_USER}/${user.id}/liked_courses`, {
      courseId: this.props.course.id,
    })
    .then((res) => {
      this.setState({ isLiked: true })
      this.setState({ countLiked: this.props.countLiked++ })
    })
    .catch((err) => {
      // show error
    })
  }

  shareToQQ = () => {
    const popup = openPopup('qq', socialShare.getQQUrl({
      url: `https://m.huoshui.org/courses/${this.props.course.id}`,
      title: `${this.props.course.Prof.name} 的 ${this.props.course.name}`,
      summary: this.props.course.Reviews.length ? `${this.props.course.Reviews[0].text}` : '',
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
  isLiked: state.course.isLiked,
  countLiked: state.course.countLiked,
})

// map redux actions to prop
const mapActionToProps = dispatch => ({
  fetchCourseById: courseId => dispatch(courseActions.fetchCourseById(courseId)),
  likeCourse: courseId => dispatch(courseActions.likeCourse(courseId)),
  unlikeCourse: courseId => dispatch(courseActions.unlikeCourse(courseId)),
  openAddReviewModal: (courseId) => {
    if (localStore.get('user')) {
      dispatch(searchCourseActions.setCourseId(courseId))
      dispatch(modalActions.openAddReviewModal(courseId))
    } else {
      dispatch(modalActions.openPromptSignupModal())
    }
  },
})

export default connect(mapStateToProps, mapActionToProps)(CourseDetailContainer)
