import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class SidebarLeft extends Component {

  render() {
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay' direction='left'
            width='wide'
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
            <Menu.Item name='list'>
              <Icon name='list' />
              我的课列
            </Menu.Item>
            <Menu.Item name='write'>
              <Icon name='write' />
              我的课评
            </Menu.Item>
            <Menu.Item name='address book outline'>
              <Icon name='address book outline' />
              我的老师
            </Menu.Item>
            <Menu.Item name='comments'>
              <Icon name='comments' />
              我的评论
            </Menu.Item>
            <Menu.Item name='setting'>
              <Icon name='setting' />
              我的设置
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
