import React, { PropTypes } from 'react'
import { Menu, Input, Button, Icon, Popup, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

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
    <Menu.Item name="review">
      <Link to="/review">评课</Link>
    </Menu.Item>
    <Menu.Item name="ranking">
      <Link to="/ranking">榜单</Link>
    </Menu.Item>
    <Menu.Item name="kelist">
      <Link to="/kelist">课列</Link>
    </Menu.Item>
    <Menu.Item name="categories">
      <Link to="/categories">逛逛</Link>
    </Menu.Item>
    <Menu.Item name="swiss knife">
      <Link to="/swiss">瑞士刀</Link>
    </Menu.Item>
    <Menu.Item>
      <Input size="large" className="icon" icon="search" iconPosition="left" placeholder=" 搜索 ..." />
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
        登录
      </Menu.Item>
      <Menu.Item name="signup">
        <Link to="/signup">注册</Link>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
)

MenuHeader.propTypes = propTypes

export default MenuHeader
