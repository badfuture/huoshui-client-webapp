import React, { PropTypes } from 'react'
import { Menu, Button, Icon, Popup, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import SearchExample from '../search/SearchExample'

const propTypes = {
  onToggleLeftSidebar: PropTypes.func.isRequired,
  onOpenModalLogin: PropTypes.func.isRequired,
}


const contentDownload = (
  <div>
    <Image src="../../images/barcode.jpg" size="small" />
  </div>
)

const MenuHeader = props => (
  <Menu size="large" attached="top" borderless fluid style={{ margin: '0px' }}>

    <Menu.Item name="sidebar">
      <Button onClick={props.onToggleLeftSidebar} style={{ backgroundColor: 'transparent' }}>
        <Icon name="content" size="large" />
      </Button>
    </Menu.Item>
    <Menu.Item name="home">
      <Link to="/home">活水</Link>
    </Menu.Item>
    <Menu.Item name="reviews">
      <Link to="/reviews">评课</Link>
    </Menu.Item>
    <Menu.Item name="Rank">
      <Link to="/rankings">榜单</Link>
    </Menu.Item>
    <Menu.Item name="categories">
      <Link to="/categories">逛逛</Link>
    </Menu.Item>
    <Menu.Item name="kelist">
      <Link to="/kelists">课列</Link>
    </Menu.Item>
    <Menu.Item name="swiss knife">
      <a target="_blank" rel="noopener noreferrer" href="http://wangzhe.cloud/swjtu">瑞士刀</a>
    </Menu.Item>
    <Menu.Item name="search" id="header-search" style={{ width: '35%' }}>
      <SearchExample />
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
      <Menu.Item name="login" onClick={props.onOpenModalLogin}>
        <span>登录</span>
      </Menu.Item>
      <Menu.Item name="signup">
        <Link to="/signup">注册</Link>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
)

MenuHeader.propTypes = propTypes

export default MenuHeader
