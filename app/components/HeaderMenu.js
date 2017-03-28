import React from 'react'
import {Menu, Input, Button, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class HeaderMenu extends React.Component {

  render(){
    return (
      <Menu size='large' attached='top' borderless={true} fluid={true} style={{margin: '0px'}}>

        <Menu.Item name='sidebar'>
          <Button onClick={this.props.onToggleLeftSidebar} style={{backgroundColor: 'transparent'}}>
            <Icon name='content' size='large'/>
          </Button>
        </Menu.Item>
        <Menu.Item name='home'>
          <Link to="/home">活水</Link>
        </Menu.Item>
        <Menu.Item name='review'>
          <Link to="/review">评课</Link>
        </Menu.Item>
        <Menu.Item name='ranking'>
          <Link to="/ranking">榜单</Link>
        </Menu.Item>
        <Menu.Item name='categories'>
          <Link to="/categories">逛逛</Link>
        </Menu.Item>
        <Menu.Item name='swiss knife'>
          <Link to="/swiss">瑞士刀</Link>
        </Menu.Item>
        <Menu.Item>
          <Input size='large' className='icon' icon='search' iconPosition='left' placeholder=' 搜索 ...' />
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item name='download clients'>
            <Link to="/download">下载客户端</Link>
          </Menu.Item>
          <Menu.Item name='login' onClick={this.props.onOpenModalLogin}>
            登录
          </Menu.Item>
          <Menu.Item name='signup'>
            <Link to="/signup">注册</Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default HeaderMenu
