import React, { PropTypes } from 'react'
import { Card, Header, Image, Divider, Segment, Container } from 'semantic-ui-react'
import ChartBar from '../../components/chart/ChartBar'
import Rating from '../rating/RatingBasic'

const SegmentCourseRatingChart = props => (
  <Segment>
    <div style={{ textAlign: 'center' }}>
      综合评分（4.9分）
    </div>
    <Container style={{ width: '100%', height: '200px', padding: '10px 10px 0px 10px', textAlign: 'center' }}>
      <ChartBar />
    </Container>
  </Segment>
)

export default SegmentCourseRatingChart
