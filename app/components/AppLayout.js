import React from 'react'
import {Link} from 'react-router-dom'
import styleMain from '../styles/custom/main.css'
import HeaderMenu from './HeaderMenu'
import SidebarLeft from './SidebarLeft'

class AppLayout extends React.Component {
  state = { leftSidebarVisible: false }

  handleToggleLeftSidebar = () => this.setState({
    leftSidebarVisible: !this.state.leftSidebarVisible
  })

  render(){
    return (
      <div className="app-container">
        <SidebarLeft
          onToggleLeftSidebar={this.handleToggleLeftSidebar.bind(this)}
          leftSidebarVisible={this.state.leftSidebarVisible}>
          <header>
            <HeaderMenu onToggleLeftSidebar={this.handleToggleLeftSidebar.bind(this)}/>
          </header>
          <div className="app-content">
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
