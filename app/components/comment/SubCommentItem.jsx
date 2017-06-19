import React, { Component } from 'react'
import { Comment } from 'semantic-ui-react'
import moment from 'moment'

const srcImage = '/images/sample/sample2.png'


class SubCommentItem extends Component {
  constructor() {
    super()
    this.state = {
      isReplyFormVisible: false,
    }
  }

  componentDidMount() {

  }

  handleReplyFormCancel() {
    this.setState({ isReplyFormVisible: false })
  }

  render() {
    const { isReplyFormVisible } = this.state
    return (
      <Comment.Group minimal>
        <Comment>
          <Comment.Avatar src={srcImage} />
          <Comment.Content>
            <Comment.Author as="a">{this.props.Author.username}</Comment.Author>
            <Comment.Metadata>
              <div>{moment(this.props.datePosted).fromNow()}</div>
            </Comment.Metadata>
            <Comment.Text>
              <p>{this.props.text}</p>
            </Comment.Text>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    )
  }
}

export default SubCommentItem
