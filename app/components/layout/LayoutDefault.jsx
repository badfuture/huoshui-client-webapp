import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import styles from './styles/AppLayout.scss'
import AppFooter from './AppFooter'
import MenuSidebarContainer from '../../containers/menu/MenuSidebarContainer'
import MenuHeaderContainer from '../../containers/menu/MenuHeaderContainer'
import MenuFloatContainer from '../../containers/menu/MenuFloatContainer'
import ModalPromptSignupContainer from '../../containers/modal/ModalPromptSignupContainer'
import ModalLoginContainer from '../../containers/modal/ModalLoginContainer'
import ModalSignupContainer from '../../containers/modal/ModalSignupContainer'
import ModalAddReviewContainer from '../../containers/modal/ModalAddReviewContainer'
import NotificationSystem from '../../components/notification/NotificationSystem'

class LayoutDefault extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className={styles.appContainer}>
        <NotificationSystem />
        <MenuFloatContainer className={styles.menuFloat} />
        <ModalPromptSignupContainer />
        <ModalLoginContainer />
        <ModalSignupContainer />
        <ModalAddReviewContainer />
        <MenuSidebarContainer>
          <header className={styles.header}>
            <MenuHeaderContainer {...this.props} />
          </header>
          <div className={styles.appContent}>
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

export default LayoutDefault
