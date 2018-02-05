import React, { PropTypes, Component } from 'react'
import { Header, Button, Icon, Divider, Modal, Form, Input, Container, Message } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { DOMAIN, URL_DEPT } from '../../constants/ApiEndpoints'
import openPopup from '../../utils/openOauthPopup'
import profileOptions from '../../data/user_profile_options'

const propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSignup: PropTypes.func.isRequired,
  authStatus: PropTypes.object.isRequired,
}

class ModalSignup extends Component {
  state = {
    // basic info
    username: '',
    email: '',

    // education options
    deptOptions: [],
    deptChosen: null,
    isFetchingDepts: false,

    // password
    password: '',
    password2: '',

    // meta
    showWarning: false,
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = (e) => {
    e.preventDefault()
    const { username, email, firstYear, deptChosen: deptId, password, password2 } = this.state
    if (!username || !email || !password || password !== password2) {
      this.setState({ showWarning: true })
    } else {
      this.props.onSignup({
        username,
        email,
        password,
        firstYear,
        deptId,
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

  // handle dept dropdown
  handleDeptChange = (e, { value }) => {
    this.setState({ deptChosen: value })
  }

  getDeptOptions = () => {
    if (this.state.deptOptions.length !== 0) {
      return
    }
    this.setState({ isFetchingDepts: true })
    axios.get(`${URL_DEPT}`)
    .then((res) => {
      const deptOptions = res.data.map(dept => ({
        key: dept.id,
        text: `${dept.longname}`,
        value: dept.id,
      }))
      this.setState({
        deptOptions,
        isFetchingDepts: false,
      })
    })
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
          <Modal.Content style={{ paddingTop: '0.5em' }}>
            <Container>
              <Form
                loading={isFetching}
                warning={(errorMessage !== '' || showWarning) && !isAuthenticated}
                onSubmit={this.handleSubmit}
              >
                <Header
                  size="small" content="基本信息" disabled
                  style={{ marginTop: '0.5em' }}
                />
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

                <Header
                  size="small" content="教育档案" disabled
                />
                <Form.Field>
                  <Form.Dropdown
                    placeholder="学院" fluid selection
                    options={this.state.deptOptions}
                    onOpen={this.getDeptOptions}
                    loading={this.state.isFetchingDepts}
                    onChange={this.handleDeptChange}
                    value={this.state.deptChosen}
                  />
                </Form.Field>
                <Form.Field>
                  <Form.Dropdown
                    fluid selection options={profileOptions.year} placeholder="年级"
                    name="firstYear"
                    onChange={this.handleChange}
                  />
                </Form.Field>

                <Message
                  warning
                  header="你肯定填错了什么！"
                />
                <Button primary fluid type="submit" >注册</Button>
              </Form>

              <Header
                size="small"
                disabled
                style={{ marginTop: '2em' }}
              >
                注册即代表你同意<Link to={`/terms`} target="_blank">《活水协议》</Link>
              </Header>
              <div
                style={{
                  position: 'absolute',
                  right: '2em',
                  bottom: '2em',
                }}
              >
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
              </div>

            </Container>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}


ModalSignup.propTypes = propTypes

export default ModalSignup
