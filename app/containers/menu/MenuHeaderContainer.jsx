import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as modalActions from '../../actions/modalActions'
import * as menuActions from '../../actions/menuActions'
import * as authActions from '../../actions/authActions'
import MenuHeader from '../../components/menu/MenuHeader'

const propTypes = {
  openLoginModal: PropTypes.func.isRequired,
  openSignupModal: PropTypes.func.isRequired,
  toggleMenuSidebar: PropTypes.func.isRequired,
  authStatus: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
}

class MenuHeaderContainer extends Component {
  componentDidMount() {}
  render() {
    return (
      <MenuHeader
        openLoginModal={this.props.openLoginModal}
        openSignupModal={this.props.openSignupModal}
        toggleMenuSidebar={this.props.toggleMenuSidebar}
        logoutUser={this.props.logoutUser}
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
  logoutUser: () => dispatch(authActions.logoutUser()),
  openLoginModal: () => dispatch(modalActions.openLoginModal()),
  openSignupModal: () => dispatch(modalActions.openSignupModal()),
  closeLoginModal: () => dispatch(modalActions.closeLoginModal()),
  toggleMenuSidebar: () => dispatch(menuActions.toggleMenuSidebar()),
})

// set propTypes
MenuHeaderContainer.propTypes = propTypes

export default connect(mapStateToProps, mapActionToProps)(MenuHeaderContainer)
