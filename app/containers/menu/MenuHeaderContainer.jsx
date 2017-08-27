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
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
}

class MenuHeaderContainer extends Component {
  componentDidMount() {
    this.props.getLatestUserInfo()
    console.log(this.props)
  }
  render() {
    return (
      <MenuHeader
        openLoginModal={this.props.openLoginModal}
        openSignupModal={this.props.openSignupModal}
        toggleMenuSidebar={this.props.toggleMenuSidebar}
        logoutUser={() => {
          this.props.history.push('/')
          this.props.logoutUser()
        }}
        auth={this.props.auth}
      />
    )
  }
}

// maps state from store to props
const mapStateToProps = state => ({
  modals: state.modals,
  auth: state.auth,
})

// maps actions to props
const mapActionToProps = dispatch => ({
  logoutUser: () => dispatch(authActions.logoutUser()),
  openLoginModal: () => dispatch(modalActions.openLoginModal()),
  openSignupModal: () => dispatch(modalActions.openSignupModal()),
  closeLoginModal: () => dispatch(modalActions.closeLoginModal()),
  toggleMenuSidebar: () => dispatch(menuActions.toggleMenuSidebar()),
  getLatestUserInfo: () => dispatch(authActions.getLatestUserInfo()),
})

// set propTypes
MenuHeaderContainer.propTypes = propTypes

export default connect(mapStateToProps, mapActionToProps)(MenuHeaderContainer)
