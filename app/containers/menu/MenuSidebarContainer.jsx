import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as menuActions from '../../actions/menuActions'
import * as modalActions from '../../actions/modalActions'
import MenuSidebar from '../../components/menu/MenuSidebar'

const propTypes = {
  toggleMenuSidebar: PropTypes.func.isRequired,
  menu: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

class MenuSidebarContainer extends Component {
  componentDidMount() {}
  render() {
    return (
      <MenuSidebar
        onToggleMenuSidebar={this.props.toggleMenuSidebar}
        menuSidebarVisible={this.props.menu.menuSidebarVisible}
        isAuthenticated={this.props.isAuthenticated}
        openPromptSignupModal={this.props.openPromptSignupModal}
      >
        {this.props.children}
      </MenuSidebar>
    )
  }
}

// maps state from store to props
const mapStateToProps = state => ({
  menu: state.menu,
  isAuthenticated: state.auth.isAuthenticated,
})

// maps actions to props
const mapActionToProps = dispatch => ({
  toggleMenuSidebar: () => dispatch(menuActions.toggleMenuSidebar()),
  openPromptSignupModal: () => dispatch(modalActions.openPromptSignupModal()),
})

// set propTypes
MenuSidebarContainer.propTypes = propTypes

export default connect(mapStateToProps, mapActionToProps)(MenuSidebarContainer)
