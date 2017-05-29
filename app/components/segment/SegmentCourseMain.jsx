import React, { PropTypes } from 'react'
import { Card, Header, Image, Divider, Segment } from 'semantic-ui-react'
import Rating from '../rating/RatingBasic'

const SegmentCourseStat = props => (
  <Segment>
    SegmentCourseRating<br />
    <Rating value={3} />
  </Segment>
)

export default SegmentCourseStat
