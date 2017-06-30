import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const ModalEditUser = props => (
  <Modal trigger={props.trigger} closeIcon="close" closeOnDimmerClick={false}>
    <Header icon="edit" content="修改用户信息" />
    <Modal.Content>
      <p>me me</p>
    </Modal.Content>
    <Modal.Actions>
      <Button color="grey">
        <Icon name="remove" /> 退出
      </Button>
      <Button color="blue">
        <Icon name="checkmark" /> 保存
      </Button>
    </Modal.Actions>
  </Modal>
)

export default ModalEditUser
