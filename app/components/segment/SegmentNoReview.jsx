import React, { PropTypes } from 'react'
import { Header, Divider, Segment } from 'semantic-ui-react'

const SegmentNoReview = props => (
  <Segment>
    相关评论：<br />
    <div style={{ margin: '4.5em' }}>
      <Header as="h4" disabled textAlign="center">
        暂无相关评论 (⊙﹏⊙)
      </Header>
    </div>
  </Segment>
)

export default SegmentNoReview
