import React, { Component } from 'react'
import { Comment, Image } from 'semantic-ui-react'
import moment from 'moment'
import SubCommentItem from './SubCommentItem'
import FormComment from '../form/FormComment'

class CommentItem extends Component {
  constructor() {
    super()
    this.state = {
      isReplyFormVisible: false,
    }
    this.handleReplyFormCancel = this.handleReplyFormCancel.bind(this)
  }

  componentDidMount() {

  }

  handleReplyFormCancel() {
    this.setState({ isReplyFormVisible: false })
  }

  render() {
    const { isReplyFormVisible } = this.state
    return (
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
          <Comment.Actions>
            <Comment.Action
              onClick={() => {
                this.setState({ isReplyFormVisible: !this.state.isReplyFormVisible })
              }}
            >
              回应
            </Comment.Action>
          </Comment.Actions>
          { isReplyFormVisible &&
            <FormComment
              onCancel={this.handleReplyFormCancel}
              commentable={this.props.commentable}
              commentableId={this.props.commentableId}
              parentCommentId={this.props.id}
              onSubmit={this.props.onSubmit}
            />
          }
        </Comment.Content>
        {
            this.props.Subcomments &&
            this.props.Subcomments.map(
              subcomment =>
                <SubCommentItem
                  key={subcomment.id}
                  commentable={this.props.commentable}
                  commentableId={this.props.commentableId}
                  onSubmit={this.props.onSubmit}
                  {...subcomment}
                />,
            )
        }
      </Comment>
    )
  }
}

export default CommentItem
