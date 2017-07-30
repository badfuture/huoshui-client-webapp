import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as modalActions from '../../actions/modalActions'
import ModalPromptSignup from '../../components/modal/ModalPromptSignup'

class ModalPromptSignupContainer extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <ModalPromptSignup
        visible={this.props.modals.promptSignupModalVisible}
        onClose={this.props.closePromptSignupModal}
        onConfirm={this.props.openLoginModal}
        authStatus={this.props.authStatus}
      />
    )
  }
}

// maps state from store to props
const mapStateToProps = state => ({
  modals: state.modals,
  authStatus: state.auth,
})

// maps actions to props
const mapActionToProps = dispatch => ({
  closePromptSignupModal: () => dispatch(modalActions.closePromptSignupModal()),
  openLoginModal: () => dispatch(modalActions.openLoginModal()),
})


export default connect(mapStateToProps, mapActionToProps)(ModalPromptSignupContainer)
