import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as modalActions from '../../actions/modalActions'
import ModalAddReview from '../../components/modal/ModalAddReview'

class ModalAddReviewContainer extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <ModalAddReview
        onClose={this.props.closeAddReviewModal}
        visible={this.props.visible}
      />
    )
  }
}

// maps state from store to props
const mapStateToProps = state => ({
  modals: state.modals,
  visible: state.modals.addReviewModalVisible,
})

// maps actions to props
const mapActionToProps = dispatch => ({
  closeAddReviewModal: () => dispatch(modalActions.closeAddReviewModal()),
})


export default connect(mapStateToProps, mapActionToProps)(ModalAddReviewContainer)
