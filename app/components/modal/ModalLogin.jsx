import React, { PropTypes, Component } from 'react'
import { Button, Modal, Form, Input, Icon, Container, Divider, Message } from 'semantic-ui-react'
import localStore from 'store'
import openPopup from '../../utils/openPopupWindow'

const iconQQ = <Icon name="qq" />
const iconWeibo = <Icon name="weibo" />
const iconGithub = <Icon name="github" />

const propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  authStatus: PropTypes.object.isRequired,
}

class ModalLogin extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.onLogin({
      email,
      password,
    })
  }

  handleClickGithub = () => {
    const provider = 'github'
    const name = provider
    let URL_GIT = 'http://github.com/login/oauth/authorize'
    const CLIENT_ID = 'aab07d7d9678decc4c77'
    URL_GIT = `${URL_GIT}?scope=user:email&client_id=${CLIENT_ID}`
    const popup = openPopup(provider, URL_GIT, name)
    this.props.onLoginGithub(popup)
  }

  render() {
    const { email, password } = this.state
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
            登录活水
          </Modal.Header>
          <Modal.Content>
            <Container>
              <Form
                loading={isFetching}
                warning={(errorMessage !== '') && !isAuthenticated}
                onSubmit={this.handleSubmit}
              >
                <Form.Field>
                  <Input icon="user" name="email" value={email} iconPosition="left" placeholder="邮箱" onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                  <Input icon="lock" name="password" value={password} iconPosition="left" placeholder="密码" type="password" onChange={this.handleChange} />
                </Form.Field>
                <Message
                  warning
                  header="你肯定填错了什么！"
                />
                <Button primary fluid type="submit" >登录</Button>
              </Form>
            </Container>

            <Divider horizontal>Or</Divider>

            <Container textAlign="center">
              <Button color="twitter" icon={iconQQ} circular disabled /> &nbsp;
              <Button color="google plus" icon={iconWeibo} circular disabled />&nbsp;
              <Button
                color="grey"
                icon={iconGithub}
                circular
                onClick={this.handleClickGithub.bind(this)}
              />
            </Container>

          </Modal.Content>
        </Modal>
      </div>
    )
  }
}


ModalLogin.propTypes = propTypes

export default ModalLogin
