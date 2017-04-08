import React, { PropTypes } from 'react'
import { Button, Modal, Form, Input, Icon, Container, Divider } from 'semantic-ui-react'

const iconQQ = <Icon name="qq" />
const iconWeibo = <Icon name="weibo" />

const ModalLogin = props => (
  <div>
    <Modal
      size="small"
      dimmer="blurring"
      open={props.loginModalVisible}
      onClose={props.onCloseModalLogin}
    >
      <Modal.Header>
        登录活水
      </Modal.Header>
      <Modal.Content>
        <Container>
          <Form>
            <Form.Field>
              <Input icon="user" iconPosition="left" placeholder="邮箱" />
            </Form.Field>
            <Form.Field>
              <Input icon="lock" iconPosition="left" placeholder="密码" type="password" />
            </Form.Field>
            <Button primary fluid type="submit">登录</Button>
          </Form>
        </Container>

        <Divider horizontal>Or</Divider>

        <Container>
          <Button color="twitter" icon={iconQQ} circular /> &nbsp;
          <Button color="google plus" icon={iconWeibo} circular />
        </Container>

      </Modal.Content>
    </Modal>
  </div>
)

ModalLogin.propTypes = {
  loginModalVisible: PropTypes.bool.isRequired,
  onCloseModalLogin: PropTypes.func.isRequired,
}

export default ModalLogin
