import React, { PropTypes } from 'react'
import { Menu, Button, Icon, Popup, Image, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import SearchGlobalContainer from '../../containers/search/SearchGlobalContainer'

const propTypes = {
  toggleMenuSidebar: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const contentDownload = (
  <div>
    <Image src="../../images/barcode.jpg" size="small" />
  </div>
)

const loginItem = props => (
  <Menu.Item name="login" onClick={props.openLoginModal}>
    <span>登录</span>
  </Menu.Item>
)
loginItem.propTypes = {
  openLoginModal: PropTypes.func.isRequired,
}

const signupItem = props => (
  <Menu.Item name="signup" onClick={props.openSignupModal}>
    <span>注册</span>
  </Menu.Item>
)

const accountItem = props => (
  <Menu.Item name="account">
    { (props.auth.user && props.auth.user.avatar) &&
      <Image src={props.auth.user.avatar} shape="circular" size="mini" style={{ marginRight: '0.5em' }} />
    }
    { (!props.auth.user || !props.auth.user.avatar) &&
      <Image src={'/images/sample/sample3.jpg'} shape="circular" size="mini" style={{ marginRight: '0.5em' }} />
    }
    { (props.auth.user.username) &&
      <Dropdown
        text={`${props.auth.user.username}的账号`}
      >
        <Dropdown.Menu style={{ marginTop: '0.6em' }}>
          <Dropdown.Item text="我的档案" as={Link} to="my-profile" />
          <Dropdown.Item text="退出账号" onClick={props.logoutUser} />
        </Dropdown.Menu>
      </Dropdown>
    }
  </Menu.Item>
)
accountItem.propTypes = {
  auth: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
  logoutUser: PropTypes.func.isRequired,
}

const MenuHeader = props => (
  <Menu size="large" attached="top" borderless fluid style={{ margin: '0px' }}>
    <Menu.Item name="sidebar">
      <Button
        onClick={props.toggleMenuSidebar}
        style={{ backgroundColor: 'transparent' }}
      >
        <Icon name="content" size="large" />
      </Button>
    </Menu.Item>
    <Menu.Item
      name="home"
      as={Link} to="/home"
      // style={{ padding: '0.25em' }}
    >
      <span
        style={{
          fontSize: '1.65em',
          fontWeight: 'bold',
          color: '#2185d0',
        }}
      >
        活水
      </span>
      {
        // <img src="/images/test_logo2.png" style={{ width: '5.25em' }} />
      }
    </Menu.Item>
    <Menu.Item name="reviews">
      <Link to="/reviews">评课</Link>
    </Menu.Item>
    <Menu.Item name="Rank">
      <Link to="/rankings">榜单</Link>
    </Menu.Item>
    {/*
    <Menu.Item name="kelist">
      <Link to="/kelists">课列</Link>
    </Menu.Item>
    */}
    <Menu.Item name="depts">
      <Link to="/depts">逛逛</Link>
    </Menu.Item>
    <Menu.Item name="swiss knife">
      <a target="_blank" rel="noopener noreferrer" href="http://swjtu.huoshui.org">瑞士刀</a>
    </Menu.Item>
    <Menu.Item name="search" id="header-search" style={{ width: '35%' }}>
      <SearchGlobalContainer />
    </Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item name="download clients">
        <Popup
          trigger={<p>下载客户端</p>}
          on="hover"
          content={contentDownload}
          position="bottom center"
        />
      </Menu.Item>
      { !props.auth.isAuthenticated && loginItem(props) }
      { !props.auth.isAuthenticated && signupItem(props) }
      { props.auth.isAuthenticated && accountItem(props) }
    </Menu.Menu>
  </Menu>
)

MenuHeader.propTypes = propTypes

export default MenuHeader
