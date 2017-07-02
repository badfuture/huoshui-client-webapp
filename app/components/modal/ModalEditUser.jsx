import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Checkbox, Form } from 'semantic-ui-react'

export default class ModalEditUser extends Component {

  render() {
    return (
      <Modal trigger={this.props.trigger} closeIcon="close" closeOnDimmerClick={false}>
        <Header icon="user outline" content="修改用户信息" />
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>First Name</label>
              <input placeholder="First Name" />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input placeholder="Last Name" />
            </Form.Field>
            <Form.Field>
              <Checkbox label="I agree to the Terms and Conditions" />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
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
  }
}
