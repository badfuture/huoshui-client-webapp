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

  constructor() {
    super()
    this.state = {
      isLogoVisible: true,
      effect: 'tada',
    }
  }

  componentDidMount() {
    this.props.getLatestUserInfo()
  }

  shakeLogo() {
    const effectArr = ['tada', 'flash', 'shake', 'pulse', 'tada']
    const randomEffect = effectArr[Math.floor(Math.random() * effectArr.length)]
    this.setState({ effect: randomEffect })
    this.setState({ isLogoVisible: !this.state.isLogoVisible })
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
        onLogoClick={this.shakeLogo.bind(this)}
        {...this.state}
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
