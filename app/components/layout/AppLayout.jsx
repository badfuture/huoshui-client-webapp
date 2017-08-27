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

const MainContent = props => (
  <MenuSidebarContainer>
    <header className={styles.header}>
      <MenuHeaderContainer {...props} />
    </header>
    <div className={styles.appContent}>
      <div>
        {props.children}
      </div>
    </div>
    <AppFooter />
  </MenuSidebarContainer>
)

class AppLayout extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className={styles.appContainer}>
        <MenuFloatContainer className={styles.menuFloat} />
        <Route render={props => <MainContent {...props} {...this.props} />} />
        <ModalPromptSignupContainer />
        <ModalLoginContainer />
        <ModalSignupContainer />
        <ModalAddReviewContainer />
      </div>
    )
  }
}

export default AppLayout
