import React from 'react'
import { Grid } from 'semantic-ui-react'
import Spinner from '../../components/spinner/Spinner'
import SegmentCourseMain from '../../components/segment/SegmentCourseMain'
import SegmentCourseGoodReviewRatio from '../../components/segment/SegmentCourseGoodReviewRatio'
import SegmentCourseRatingChart from '../../components/segment/SegmentCourseRatingChart'
import SegmentProfOverview from '../../components/segment/SegmentProfOverview'


const DetailGrid = props => (
  <div>
    <Grid stackable>
      <Grid.Row>
        <Grid.Column width={11} style={{ paddingRight: '3.5rem' }}>
          <SegmentCourseMain />
        </Grid.Column>
        <Grid.Column width={5} style={{ paddingLeft: '1.0rem' }}>
          <SegmentCourseRatingChart />
          <SegmentCourseGoodReviewRatio />
          <SegmentProfOverview />
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
