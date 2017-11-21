import React from 'react'
import { Grid, Segment, Container } from 'semantic-ui-react'
import ChartPieGap from '../../components/chart/ChartPieGap'
import ChartBar from '../../components/chart/ChartBar'


const SegmentRatingCharts = (props) => {
  const stat = props.Stat
  const countReview = stat ? stat.countReview : 0
  const scoreOverall = ((countReview !== 0) && stat.scoreOverall)
                          ? stat.scoreOverall.toFixed(1) : '0.0'

  return (
    <Segment>
      <Grid stackable divided>
        <Grid.Row>
          <Grid.Column width={8}>
            <div style={{ textAlign: 'center' }}>
              好评率（{countReview}人参与）
            </div>
            <Container style={{ width: '100%', height: '200px', padding: '10px 10px 10px 10px', textAlign: 'center' }}>
              <ChartPieGap {...props.Stat} />
            </Container>
          </Grid.Column>
          <Grid.Column width={8}>
            <div style={{ textAlign: 'center' }}>
              综合评分（{scoreOverall}分）
            </div>
            <Container style={{ width: '100%', height: '200px', padding: '10px 10px 0px 10px', textAlign: 'center' }}>
              <ChartBar {...props.Stat} />
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

SegmentRatingCharts.defaultProps = {
  Stat: {
    countReview: 0,
    scoreOverall: 0,
  },
}

export default SegmentRatingCharts
