import React, { Component } from 'react'
import ReactQuill from 'react-quill'
import '!style-loader!css-loader!react-quill/dist/quill.bubble.css'

export default class RichTextEditor extends Component {
  constructor() {
    super()
    this.state = {
      text: {},
    }
  }

  componentDidMount() {

  }

  handleChange(value) {
    this.setState({ text: value })
  }

  render() {
    return (
      <ReactQuill
        value={this.state.text}
        onChange={this.handleChange}
        theme="bubble"
      />
    )
  }
}
