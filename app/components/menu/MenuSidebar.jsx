import React, { PropTypes } from 'react'
import { Sidebar, Segment, Button, Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const MenuSidebar = props => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar
      as={Menu}
      animation="overlay" direction="left"
      width="thin"
      visible={props.leftSidebarVisible}
      icon="labeled"
      vertical
    >
      <Menu.Item name="home">
        <Button
          onClick={props.onToggleLeftSidebar}
          style={{ backgroundColor: 'transparent', color: 'black' }}
        >
          <Icon
            name="content"
            size="large"
            style={{ margin: '0px' }}
          />
        </Button>
      </Menu.Item>
      <Menu.Item name="my-review">
        <Icon name="write" />
        <Link to="/my-review">我的课评</Link>
      </Menu.Item>
      <Menu.Item name="my-kelist">
        <Icon name="list" />
        <Link to="/my-kelist">我的课列</Link>
      </Menu.Item>
      <Menu.Item name="my-prof">
        <Icon name="address book outline" />
        <Link to="/my-prof">我的老师</Link>
      </Menu.Item>
      <Menu.Item name="my-reply">
        <Icon name="commenting outline" />
        <Link to="/my-reply">我的回复</Link>
      </Menu.Item>
      <Menu.Item name="my-profile">
        <Icon name="user outline" />
        <Link to="/my-profile">我的档案</Link>
      </Menu.Item>
      <Menu.Item name="feedback">
        <Icon name="qrcode" />
        <Link to="/feedback">问题反馈</Link>
      </Menu.Item>
    </Sidebar>
    <Sidebar.Pusher>
      {props.children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
)

MenuSidebar.propTypes = {
  leftSidebarVisible: PropTypes.bool.isRequired,
  onToggleLeftSidebar: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default MenuSidebar
