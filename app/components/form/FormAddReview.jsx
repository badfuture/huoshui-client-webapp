import React, { Component } from 'react'
import { Button, Form, Input, TextArea, Message } from 'semantic-ui-react'

class FormAddReview extends Component {
  state = {
    name: '',
    contact: '',
    content: '',
    msgVisible: false,
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = (e) => {
    e.preventDefault()
    const { name, contact, content } = this.state
    this.setState({ msgVisible: true })
    this.props.submitFeedback({
      name,
      contact,
      content,
    })
  }
  handleDismissMsg = () => {
    this.setState({ msgVisible: false })
  }

  render() {
    const { name, contact, content } = this.state
    return (
      <Form
        success={this.props.sendSuccess}
        loading={this.props.isFetching}
        onSubmit={this.handleSubmit}
        style={{ padding: '1em' }}
      >
        <Form.Field
          control={Input}
          name="name"
          label="称呼（选填）"
          value={name}
          placeholder="昵称即可"
          onChange={this.handleChange}
        />
        <Form.Field
          control={Input}
          name="contact"
          label="联系（选填）"
          value={contact}
          placeholder="邮箱，手机，QQ，微信"
          onChange={this.handleChange}
        />
        <Form.Field
          control={TextArea}
          name="content"
          label="反馈（必填）"
          value={content}
          placeholder="有问必答，绝对保密"
          onChange={this.handleChange}
        />
        <Message
          success
          hidden={!this.state.msgVisible}
          onDismiss={this.handleDismissMsg}
          color="blue"
          header="发送成功"
          content="反馈已收到，谢谢你的参与！"
        />
        <Form.Field control={Button} primary>发送</Form.Field>
      </Form>
    )
  }

}

export default FormAddReview
