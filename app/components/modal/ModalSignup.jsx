import React, { PropTypes, Component } from 'react'
import { Button, Icon, Divider, Modal, Form, Input, Container, Message } from 'semantic-ui-react'
import { DOMAIN } from '../../constants/ApiEndpoints'
import openPopup from '../../utils/openOauthPopup'

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
    password2: '',
    showWarning: false,
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = (e) => {
    e.preventDefault()
    const { username, email, password, password2 } = this.state
    if (!username || !email || !password || password !== password2) {
      this.setState({ showWarning: true })
    } else {
      this.props.onSignup({
        username,
        email,
        password,
      })
    }
  }

  handleClickQQ = () => {
    const provider = 'qq'
    const url = 'https://graph.qq.com/oauth2.0/authorize'
    const scope = 'get_user_info'
    const clientId = '101410908'
    const state = encodeURIComponent(btoa(provider + clientId))
    const redirect = `${DOMAIN}/auth/qq/callback`
    const responseType = 'code'
    const requestUrl = `${url}?scope=${scope}&client_id=${clientId}&state=${state}&redirect_uri=${redirect}&response_type=${responseType}`
    const popup = openPopup(provider, requestUrl)
    this.props.onLoginQQ(popup)
  }

  handleClickWeibo = () => {
    const provider = 'weibo'
    const url = 'https://api.weibo.com/oauth2/authorize'
    const scope = 'email'
    const clientId = '3486860384'
    const redirect = `${DOMAIN}/auth/weibo/callback`
    const responseType = 'code'
    const requestUrl = `${url}?scope=${scope}&client_id=${clientId}&redirect_uri=${redirect}&response_type=${responseType}`
    const popup = openPopup(provider, requestUrl)
    this.props.onLoginWeibo(popup)
  }

  render() {
    const { username, email, password, password2, showWarning } = this.state
    const { isFetching, errorMessage, isAuthenticated } = this.props.authStatus
    return (
      <div>
        <Modal
          size="mini"
          dimmer="blurring"
          open={this.props.visible}
          onClose={this.props.onClose}
          closeIcon="close"
          closeOnDimmerClick={false}
        >
          <Modal.Header>
            加入活水
          </Modal.Header>
          <Modal.Content>
            <Container>
              <Form
                loading={isFetching}
                warning={(errorMessage !== '' || showWarning) && !isAuthenticated}
                onSubmit={this.handleSubmit}
              >
                <Form.Field>
                  <Input icon="user outline" name="username" value={username} iconPosition="left" placeholder="昵称" onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                  <Input icon="mail outline" name="email" value={email} iconPosition="left" placeholder="邮箱" onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                  <Input icon="key" name="password" value={password} iconPosition="left" placeholder="输入密码" type="password" onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                  <Input icon="key" name="password2" value={password2} iconPosition="left" placeholder="确认密码" type="password" onChange={this.handleChange} />
                </Form.Field>
                <Message
                  warning
                  header="你肯定填错了什么！"
                />
                <Button primary fluid type="submit" >注册</Button>
              </Form>
            </Container>

            <Divider horizontal>Or</Divider>

            <Container textAlign="center">
              <Button
                color="twitter"
                icon={<Icon name="qq" />}
                circular
                onClick={this.handleClickQQ.bind(this)}
              />&nbsp;
              <Button
                color="google plus"
                icon={<Icon name="weibo" />}
                circular
                onClick={this.handleClickWeibo.bind(this)}
              />&nbsp;
            </Container>

          </Modal.Content>
        </Modal>
      </div>
    )
  }
}


ModalSignup.propTypes = propTypes

export default ModalSignup
