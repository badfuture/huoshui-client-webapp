import React from 'react'
import { Comment, Header, Divider } from 'semantic-ui-react'
import styles from './styles/CommentList.scss'
import CommentItem from './CommentItem'
import FormComment from '../form/FormComment'

const CommentList = props => (
  <Comment.Group className={styles.commentContainer} >
    <Header as="h4" >回应</Header>

    <FormComment
      onSubmit={props.submitComment}
      commentable={props.commentable}
      commentableId={props.commentableId}
    />
    {(props.comments && props.comments.length !== 0) && <Divider />}

    {props.comments && props.comments.map(
      comment =>
        <CommentItem
          key={comment.id}
          {...comment}
          onSubmit={props.submitComment}
          commentable={props.commentable}
          commentableId={props.commentableId}
        />)
    }

  </Comment.Group>
)

export default CommentList
