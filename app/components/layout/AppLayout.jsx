import React, { PropTypes, Component } from 'react'
import styles from './styles/AppLayout.scss'
import AppFooter from './AppFooter'
import MenuSidebarContainer from '../../containers/menu/MenuSidebarContainer'
import MenuHeaderContainer from '../../containers/menu/MenuHeaderContainer'
import ModalLoginContainer from '../../containers/modal/ModalLoginContainer'
import ModalSignupContainer from '../../containers/modal/ModalSignupContainer'
import MenuFloat from '../../components/menu/MenuFloat'

const propTypes = {
  children: PropTypes.node.isRequired,
}

class AppLayout extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className={styles.appContainer}>
        <MenuFloat className={styles.menuFloat} />
        <MenuSidebarContainer>
          <header className={styles.header}>
            <MenuHeaderContainer />
          </header>
          <div className={styles.appContent}>
            <ModalLoginContainer />
            <ModalSignupContainer />
            <div>
              {this.props.children}
            </div>
          </div>
          <AppFooter />
        </MenuSidebarContainer>
      </div>
    )
  }
}

// set propTypes
AppLayout.propTypes = propTypes

export default AppLayout
