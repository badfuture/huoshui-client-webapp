import React, { Component } from 'react'
import { Button, Modal, Header, Icon } from 'semantic-ui-react'

class ModalPromptSignup extends Component {

  render() {
    return (
      <div>
        <Modal
          basic
          size="mini"
          open={this.props.visible}
          onClose={this.props.onClose}
        >
          <Header icon="user" content="游客模式" />
          <Modal.Content>
            <p>您目前处于游客模式，如果希望发表评论，关注，或查看您的收藏请先注册并登录。每个声音都有力量！</p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              onClick={() => {
                this.props.onClose()
              }}
              basic color="red" inverted
            >
              <Icon name="remove" /> 继续游览
            </Button>
            <Button
              onClick={() => {
                this.props.onClose()
                this.props.onConfirm()
              }}
              color="green" inverted
            >
              <Icon name="checkmark" /> 快捷登录
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalPromptSignup
