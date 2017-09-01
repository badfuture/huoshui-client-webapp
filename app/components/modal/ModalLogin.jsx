import React, { PropTypes, Component } from 'react'
import { Button, Modal, Form, Input, Icon, Container, Divider, Message } from 'semantic-ui-react'
import openPopup from '../../utils/openPopupWindow'
import { DOMAIN } from '../../constants/ApiEndpoints'

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
    const { email, password } = this.state
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
            登录活水
          </Modal.Header>
          <Modal.Content>
            <Container>
              <Form
                loading={isFetching}
                warning={(!!errorMessage) && !isAuthenticated}
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


ModalLogin.propTypes = propTypes

export default ModalLogin
