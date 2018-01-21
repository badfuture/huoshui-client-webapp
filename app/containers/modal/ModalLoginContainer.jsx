import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as modalActions from '../../actions/modalActions'
import * as authActions from '../../actions/authActions'
import ModalLogin from '../../components/modal/ModalLogin'

const propTypes = {
  modals: PropTypes.object.isRequired,
  closeLoginModal: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  authStatus: PropTypes.object.isRequired,
}

class ModalLoginContainer extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <ModalLogin
        visible={this.props.modals.loginModalVisible}
        onClose={this.props.closeLoginModal}
        onLogin={this.props.loginUser}
        onLoginQQ={this.props.loginUserOauth}
        onLoginWeibo={this.props.loginUserOauth}
        onLoginGithub={this.props.loginUserGithub}
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
  closeLoginModal: () => dispatch(modalActions.closeLoginModal()),
  loginUser: creds => dispatch(authActions.loginUser(creds)),
  loginUserOauth: popup => dispatch(authActions.loginUserOauth(popup)),
  loginUserOauth: popup => dispatch(authActions.loginUserOauth(popup)),
})

// set propTypes
ModalLoginContainer.propTypes = propTypes

export default connect(mapStateToProps, mapActionToProps)(ModalLoginContainer)
