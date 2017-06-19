import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

class FormComment extends Component {
  constructor() {
    super()
    this.state = {
      isButtonsShown: false,
      text: '',
    }
  }

  componentDidMount() {

  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit() {
    const commentTarget = {
      text: this.state.text,
      commentable: this.props.commentable,
      commentableId: this.props.commentableId,
    }
    console.log('onSubmit', commentTarget)
    if (this.props.parentCommentId) {
      commentTarget.parentId = this.props.parentCommentId
    }
    if (this.props.onSubmit) {
      this.props.onSubmit(commentTarget)
    }
  }

  handleCancel() {
    this.setState({
      isButtonsShown: false,
    })
    if (this.props.onCancel) {
      this.props.onCancel()
    }
  }

  render() {
    const { isButtonsShown, text } = this.state
    return (
      <Form
        reply
        onSubmit={e => e.preventDefault()}
      >
        <Form.TextArea
          name="text"
          value={this.state.text}
          style={{
            minHeight: '3em',
            height: '7em',
          }}
          onFocus={() => { this.setState({ isButtonsShown: true }) }}
          onBlur={() => { }}
          onChange={this.handleChange}
        />
        {
          isButtonsShown && <div>
            <Button content="取消" basic color="grey" onClick={this.handleCancel.bind(this)} />
            <Button content="回应" basic primary onClick={this.handleSubmit.bind(this)} />
          </div>
        }
      </Form>
    )
  }
}

export default FormComment
