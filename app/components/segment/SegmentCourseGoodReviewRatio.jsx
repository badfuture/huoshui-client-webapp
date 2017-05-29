import React, { PropTypes } from 'react'
import { Card, Header, Image, Divider, Segment, Container } from 'semantic-ui-react'
import ChartPieGap from '../../components/chart/ChartPieGap'

const SegmentCourseGoodReviewRatio = props => (
  <Segment>
    <div style={{ textAlign: 'center' }}>
      好评率（4人参与）
    </div>
    <Container style={{ width: '100%', height: '200px', padding: '10px 10px 10px 10px', textAlign: 'center' }}>
      <ChartPieGap />
    </Container>
  </Segment>
)

export default SegmentCourseGoodReviewRatio
