import React, { PropTypes } from 'react'
import { Grid, Button, Modal, Form, Input, Icon, Container } from 'semantic-ui-react'

const ModalLogin = props => (
  <div>
    <Modal
      size="small"
      dimmer="blurring"
      style={{ width: '50%' }}
      open={props.loginModalVisible}
      onClose={props.onCloseModalLogin}
    >
      <Modal.Header>
        登录活水
      </Modal.Header>
      <Modal.Content>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Form>
                <Form.Field>
                  <Input icon="user" iconPosition="left" placeholder="邮箱" />
                </Form.Field>
                <Form.Field>
                  <Input icon="lock" iconPosition="left" placeholder="密码" type="password" />
                </Form.Field>
                <Button primary fluid type="submit">登录</Button>
              </Form>
            </Grid.Column>
            <Grid.Column>
              <Container>
                <Button.Group size="large">
                  <Button color="twitter">
                    <Icon name="qq" /> QQ登录
                  </Button>
                  <Button.Or />
                  <Button color="google plus">
                    <Icon name="weibo" /> 新浪微博
                  </Button>
                </Button.Group>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </Modal.Content>
    </Modal>
  </div>
)

ModalLogin.propTypes = {
  loginModalVisible: PropTypes.bool.isRequired,
  onCloseModalLogin: PropTypes.func.isRequired,
}

export default ModalLogin
