import React from 'react'
import { Button, Form, Input, TextArea } from 'semantic-ui-react'

const FormFeedback = () => (
  <Form>
    <Form.Group widths="equal">
      <Form.Field control={Input} label="称呼（选填）" placeholder="昵称即可" />

    </Form.Group>
    <Form.Field control={Input} label="联系（选填）" placeholder="邮箱，手机，QQ，微信" />
    <Form.Field control={TextArea} label="反馈（必填）" placeholder="有问必答，绝对保密" />
    <Form.Field control={Button}>发送</Form.Field>
  </Form>
)

export default FormFeedback
