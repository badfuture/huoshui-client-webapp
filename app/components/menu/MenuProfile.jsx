import React, { Component } from 'react'
import { Menu, Icon, Label } from 'semantic-ui-react'

export default class MenuProf extends Component {

  render() {
    return (
      <Menu size="huge" color="blue" widths={5} style={{ marginBottom: '1.5em' }}>
        <Menu.Item
          name="review"
          active={this.props.activeTab === 'review'}
          onClick={this.props.onTabClick}
        >
          <Icon name="edit" />
          课评
        </Menu.Item>

        <Menu.Item
          name="course"
          active={this.props.activeTab === 'course'}
          onClick={this.props.onTabClick}
        >
          <Icon name="book" />
          课程
        </Menu.Item>

        <Menu.Item
          name="prof"
          active={this.props.activeTab === 'prof'}
          onClick={this.props.onTabClick}
        >
          <Icon name="address book outline" />
          老师
        </Menu.Item>

        <Menu.Item
          name="kelist"
          active={this.props.activeTab === 'kelist'}
          onClick={this.props.onTabClick}
        >
          <Icon name="list" />
          课列
        </Menu.Item>
        <Menu.Item
          name="message"
          active={this.props.activeTab === 'message'}
          onClick={this.props.onTabClick}
        >
          <Label color="red" floating>
            3
          </Label>
          <Icon name="announcement" />
          消息
        </Menu.Item>
      </Menu>
    )
  }
}
