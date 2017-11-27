import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as modalActions from '../../actions/modalActions'
import * as searchCourseActions from '../../actions/searchCourseActions'
import ModalAddReview from '../../components/modal/ModalAddReview'

class ModalAddReviewContainer extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <ModalAddReview
        onClose={this.props.closeAddReviewModal}
        visible={this.props.visible}
        courseId={this.props.courseId}
        resetSearchCourse={this.props.resetSearchCourse}
      />
    )
  }
}

// maps state from store to props
const mapStateToProps = state => ({
  modals: state.modals,
  visible: state.modals.addReviewModalVisible,
  courseId: (state.searchCourse.optionSelected && state.searchCourse.optionSelected.result) ?
            state.searchCourse.optionSelected.result.courseId : null,
})

// maps actions to props
const mapActionToProps = dispatch => ({
  closeAddReviewModal: () => dispatch(modalActions.closeAddReviewModal()),
  resetSearchCourse: () => dispatch(searchCourseActions.resetComponent()),
})


export default connect(mapStateToProps, mapActionToProps)(ModalAddReviewContainer)
