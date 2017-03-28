import React from 'react'
import {Link} from 'react-router-dom'
import styleMain from '../styles/custom/main.css'
import HeaderMenu from './HeaderMenu'
import SidebarLeft from './SidebarLeft'
import ModalLogin from './Modal/ModalLogin'

class AppLayout extends React.Component {
  state = {
    leftSidebarVisible: false,
    loginModalVisible: false
  }

  handleToggleLeftSidebar = () => this.setState({
    leftSidebarVisible: !this.state.leftSidebarVisible
  })
  handleOpenModalLogin = () => this.setState({
    loginModalVisible: true
  })
  handleCloseModalLogin = () => this.setState({
    loginModalVisible: false
  })

  render(){
    return (
      <div className="app-container">
        <SidebarLeft
          onToggleLeftSidebar={this.handleToggleLeftSidebar.bind(this)}
          leftSidebarVisible={this.state.leftSidebarVisible}>
          <header>
            <HeaderMenu
              onToggleLeftSidebar={this.handleToggleLeftSidebar.bind(this)}
              onOpenModalLogin={this.handleOpenModalLogin.bind(this)}/>
          </header>
          <div className="app-content">
            <ModalLogin
              loginModalVisible={this.state.loginModalVisible}
              onCloseModalLogin={this.handleCloseModalLogin.bind(this)}/>
            {this.props.children}
          </div>
          <footer>
            <p>
              This is the footer
            </p>
          </footer>
        </SidebarLeft>
      </div>
    )
  }
}

export default AppLayout
