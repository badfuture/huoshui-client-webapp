import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import Spinner from '../../components/spinner/Spinner'
import SegmentCourseMain from '../../components/segment/SegmentCourseMain'
import SegmentProfOverview from '../../components/segment/SegmentProfOverview'
import SegmentRatingCharts from '../../components/segment/SegmentRatingCharts'
import ListReview from '../../components/list/ListReview'

const DetailGrid = props => (
  <div>
    <Grid stackable>
      <Grid.Row>
        <Grid.Column width={11} style={{ paddingRight: '3.5rem' }}>
          <SegmentCourseMain {...props.course} />
          <SegmentRatingCharts {...props.course} />
          <Segment>
            相关评论：<br />
            {(props.course.Reviews && props.course.Reviews[0]) ?
              <ListReview reviews={props.course.Reviews} history={props.history} /> :
              <div>
                <br />暂无相关评论~
              </div>
            }

          </Segment>
        </Grid.Column>
        <Grid.Column width={5} style={{ paddingLeft: '1.0rem' }}>
          <SegmentProfOverview {...props.course.Prof} history={props.history} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)


const ReviewDetail = (props) => {
  if (!props.isFetching) {
    return <DetailGrid {...props} />
  }
  return <Spinner />
}

export default ReviewDetail
