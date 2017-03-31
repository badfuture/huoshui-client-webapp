import React, { PropTypes } from 'react'
import { Container } from 'semantic-ui-react'
import styles from './styles/AppLayout.scss'
import AppFooter from './AppFooter'
import MenuHeader from '../menu/MenuHeader'
import MenuSidebar from '../menu/MenuSidebar'
import ModalLogin from '../modal/ModalLogin'

const propTypes = {
  children: PropTypes.node.isRequired,
}

class AppLayout extends React.Component {

  constructor(props) {
    super(props)

    this.handleToggleLeftSidebar = this.handleToggleLeftSidebar.bind(this)
    this.handleOpenModalLogin = this.handleOpenModalLogin.bind(this)
    this.handleCloseModalLogin = this.handleCloseModalLogin.bind(this)
  }

  state = {
    leftSidebarVisible: false,
    loginModalVisible: false,
  }

  handleToggleLeftSidebar = () => this.setState({
    leftSidebarVisible: !this.state.leftSidebarVisible,
  })
  handleOpenModalLogin = () => this.setState({
    loginModalVisible: true,
  })
  handleCloseModalLogin = () => this.setState({
    loginModalVisible: false,
  })

  render() {
    return (
      <div className={styles.appContainer}>
        <MenuSidebar
          onToggleLeftSidebar={this.handleToggleLeftSidebar}
          leftSidebarVisible={this.state.leftSidebarVisible}
        >
          <header className={styles.header}>
            <MenuHeader
              onToggleLeftSidebar={this.handleToggleLeftSidebar}
              onOpenModalLogin={this.handleOpenModalLogin}
            />
          </header>
          <div className="app-content">
            <ModalLogin
              loginModalVisible={this.state.loginModalVisible}
              onCloseModalLogin={this.handleCloseModalLogin}
            />
            <Container>
              {this.props.children}
            </Container>
          </div>
          <AppFooter />
        </MenuSidebar>
      </div>
    )
  }
}

AppLayout.propTypes = propTypes

export default AppLayout
