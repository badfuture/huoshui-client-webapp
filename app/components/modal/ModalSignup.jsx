import React, { PropTypes, Component } from 'react'
import { Button, Modal, Form, Input, Container, Message } from 'semantic-ui-react'


const propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSignup: PropTypes.func.isRequired,
  authStatus: PropTypes.object.isRequired,
}

class ModalSignup extends Component {
  state = {
    username: '',
    email: '',
    password: '',
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = (e) => {
    e.preventDefault()
    const { username, email, password } = this.state
    this.props.onSignup({
      username,
      email,
      password,
    })
  }

  render() {
    const { email, password, username } = this.state
    const { isFetching, errorMessage, isAuthenticated } = this.props.authStatus
    return (
      <div>
        <Modal
          size="small"
          dimmer="blurring"
          open={this.props.visible}
          onClose={this.props.onClose}
        >
          <Modal.Header>
            加入活水
          </Modal.Header>
          <Modal.Content>
            <Container>
              <Form
                loading={isFetching}
                warning={(errorMessage !== '') && !isAuthenticated}
                onSubmit={this.handleSubmit}
              >
                <Form.Field>
                  <Input icon="user outline" name="username" value={username} iconPosition="left" placeholder="用户名" onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                  <Input icon="mail outline" name="email" value={email} iconPosition="left" placeholder="邮箱" onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                  <Input icon="key" name="password" value={password} iconPosition="left" placeholder="密码" type="password" onChange={this.handleChange} />
                </Form.Field>
                <Message
                  warning
                  header="你肯定填错了什么！"
                />
                <Button primary fluid type="submit" >注册</Button>
              </Form>
            </Container>

          </Modal.Content>
        </Modal>
      </div>
    )
  }
}


ModalSignup.propTypes = propTypes

export default ModalSignup
