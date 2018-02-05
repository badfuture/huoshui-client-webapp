import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as modalActions from '../../actions/modalActions'
import * as searchCourseActions from '../../actions/searchCourseActions'
import ModalAddReview from '../../components/modal/ModalAddReview'
import { success, info, error } from 'react-notification-system-redux'
import Messages from '../../constants/NotificationMessages'

class ModalAddReviewContainer extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <ModalAddReview
        onClose={this.props.closeAddReviewModal}
        visible={this.props.visible}
        searchVisible={this.props.searchVisible}
        courseId={this.props.courseId}
        resetSearchCourse={this.props.resetSearchCourse}
        promptReviewSuccess={this.props.promptReviewSuccess}
        promptReviewTwice={this.props.promptReviewTwice}
      />
    )
  }
}

// maps state from store to props
const mapStateToProps = (state) => {
  let courseId = null
  if (state.searchCourse.courseId) {
    courseId = state.searchCourse.courseId
  } else if (state.searchCourse.optionSelected && state.searchCourse.optionSelected.result) {
    courseId = state.searchCourse.optionSelected.result.courseId
  }

  return {
    modals: state.modals,
    visible: state.modals.addReviewModalVisible,
    courseId,
    searchVisible: state.searchCourse.visible,
  }
}

// maps actions to props
const mapActionToProps = dispatch => ({
  closeAddReviewModal: () => dispatch(modalActions.closeAddReviewModal()),
  resetSearchCourse: () => dispatch(searchCourseActions.resetComponent()),
  promptReviewSuccess: () => dispatch(info(Messages.addReviewSuccess)),
  promptReviewTwice: () => dispatch(error(Messages.addReviewTwice)),
})


export default connect(mapStateToProps, mapActionToProps)(ModalAddReviewContainer)
