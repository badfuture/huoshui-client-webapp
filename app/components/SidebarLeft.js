import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Divider } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class SidebarLeft extends Component {

  render() {
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay' direction='left'
            width='thin'
            visible={this.props.leftSidebarVisible}
            icon='labeled'
            vertical>
            <Menu.Item name='home'>
              <Button onClick={this.props.onToggleLeftSidebar}
                      style={{backgroundColor: 'transparent', color: 'black'}}>
                <Icon name='content'
                      size = 'large'
                      style={{margin: '0px'}}/>
              </Button>
            </Menu.Item>
            <Menu.Item name='my-review'>
              <Icon name='write' />
              <Link to="/my-review">我的课评</Link>
            </Menu.Item>
            <Menu.Item name='my-kelist'>
              <Icon name='list' />
              <Link to="/my-kelist">我的课列</Link>
            </Menu.Item>
            <Menu.Item name='address book outline'>
              <Icon name='address book outline' />
              <Link to="/my-teacher">我的老师</Link>
            </Menu.Item>
            <Menu.Item name='comments'>
              <Icon name='comments' />
              我的评论
            </Menu.Item>
            <Menu.Item name='setting'>
              <Icon name='setting' />
              <Link to="/my-setting">我的设置</Link>
            </Menu.Item>
            <Menu.Item name='About Us'>
              <Icon name='qrcode' />
              关于我们
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            {this.props.children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SidebarLeft
