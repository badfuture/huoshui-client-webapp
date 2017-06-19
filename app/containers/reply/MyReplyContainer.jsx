import React from 'react'
import { Container } from 'semantic-ui-react'
import CommentList from '../../components/comment/CommentList'

const MyReplyContainer = () => (
  <div className="container-main-grey">
    <Container>
      <CommentList />
    </Container>
  </div>
)

export default MyReplyContainer
