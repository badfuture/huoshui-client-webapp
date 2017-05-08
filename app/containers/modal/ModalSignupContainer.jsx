import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as modalActions from '../../actions/modalActions'
import * as authActions from '../../actions/authActions'
import ModalSignup from '../../components/modal/ModalSignup'

class ModalSignupContainer extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <ModalSignup
        visible={this.props.modals.signupModalVisible}
        onClose={this.props.closeSignupModal}
        onSignup={this.props.signupUser}
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
  closeSignupModal: () => dispatch(modalActions.closeSignupModal()),
  signupUser: creds => dispatch(authActions.signupUser(creds)),
})


export default connect(mapStateToProps, mapActionToProps)(ModalSignupContainer)
