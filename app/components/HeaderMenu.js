import React from 'react'
import {Menu, Input, Button, Icon} from 'semantic-ui-react'

class HeaderMenu extends React.Component {

  render(){
    return (
      <Menu size='large' attached='top' borderless={true} fluid={true}>

        <Menu.Item name='sidebar'>
          <Button onClick={this.props.onToggleLeftSidebar} style={{backgroundColor: 'transparent'}}>
            <Icon name='content' size='large'/>
          </Button>
        </Menu.Item>
        <Menu.Item name='home'>
          活水
        </Menu.Item>
        <Menu.Item name='review'>
          评课
        </Menu.Item>
        <Menu.Item name='ranking lists'>
          榜单
        </Menu.Item>
        <Menu.Item name='categories'>
          逛逛
        </Menu.Item>
        <Menu.Item name='swiss knife'>
          瑞士刀
        </Menu.Item>
        <Menu.Item>
          <Input size='large' className='icon' icon='search' iconPosition='left' placeholder=' 搜索 ...' />
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item name='download clients'>
            下载客户端
          </Menu.Item>
          <Menu.Item name='login'>
            登录
          </Menu.Item>
          <Menu.Item name='signup'>
            注册
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default HeaderMenu
