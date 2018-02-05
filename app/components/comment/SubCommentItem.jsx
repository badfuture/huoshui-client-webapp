import React, { Component } from 'react'
import { Comment, Image } from 'semantic-ui-react'
import moment from 'moment'

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
      <Comment.Group style={{ paddingTop: '0.25em', paddingBottom: '0.5em', marginTop: '0.5em' }}>
        <Comment>
          <Comment.Avatar as={Image} circular src={this.props.Author.avatarSmall} />
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
