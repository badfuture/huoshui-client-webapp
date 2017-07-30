import React, { PropTypes } from 'react'
import { Sidebar, Segment, Button, Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const propTypes = {
  menuSidebarVisible: PropTypes.bool.isRequired,
  onToggleMenuSidebar: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

const checkAuth = (e, props) => {
  if (!props.isAuthenticated) {
    e.preventDefault()
    props.openPromptSignupModal()
  }
}

const MenuSidebar = props => (
  <Sidebar.Pushable as={Segment} style={{ boxShadow: 'none', border: 'none' }}>
    <Sidebar
      as={Menu}
      animation="overlay" direction="left"
      width="thin"
      visible={props.menuSidebarVisible}
      icon="labeled"
      vertical
    >
      <Menu.Item name="home">
        <Button
          onClick={props.onToggleMenuSidebar}
          style={{ backgroundColor: 'transparent', color: 'black' }}
        >
          <Icon
            name="content"
            size="large"
            style={{ margin: '0px' }}
          />
        </Button>
      </Menu.Item>
      <Menu.Item
        name="my-review" as={Link} to="/my-review"
        onClick={(e) => { checkAuth(e, props) }}
      >
        <Icon name="write" />
        我的课评
      </Menu.Item>
      <Menu.Item
        name="my-prof" as={Link} to="/my-prof"
        onClick={(e) => { checkAuth(e, props) }}
      >
        <Icon name="address book outline" />
        <Link to="/my-prof">我的老师</Link>
      </Menu.Item>
      <Menu.Item
        name="my-kelist" as={Link} to="/my-kelist"
        onClick={(e) => { checkAuth(e, props) }}
      >
        <Icon name="book" />
        <Link to="/my-kelist">我的课程</Link>
      </Menu.Item>
      <Menu.Item
        name="my-kelist" as={Link} to="/my-kelist"
        onClick={(e) => { checkAuth(e, props) }}
      >
        <Icon name="list" />
        <Link to="/my-kelist">我的课列</Link>
      </Menu.Item>
      {
        /*
        <Menu.Item name="my-reply">
          <Icon name="commenting outline" />
          <Link to="/my-reply">我的回复</Link>
        </Menu.Item>
         */
      }
      <Menu.Item
        name="my-profile" as={Link} to="/my-profile"
        onClick={(e) => { checkAuth(e, props) }}
      >
        <Icon name="user outline" />
        <Link to="/my-profile">我的档案</Link>
      </Menu.Item>
      <Menu.Item
        name="feedback" as={Link} to="/feedback"
        onClick={(e) => { checkAuth(e, props) }}
      >
        <Icon name="qrcode" />
        <Link to="/feedback">问题反馈</Link>
      </Menu.Item>
    </Sidebar>
    <Sidebar.Pusher>
      {props.children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
)

MenuSidebar.propTypes = propTypes

export default MenuSidebar
