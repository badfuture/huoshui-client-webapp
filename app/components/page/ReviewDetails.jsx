import React, { PropTypes } from 'react'
import { Grid, Divider } from 'semantic-ui-react'
import CommentContainer from '../../containers/comment/CommentContainer'
import CardProfDetail from '../../components/card/CardProfDetail'
import CardReviewDetail from '../../components/card/CardReviewDetail'
import CardOverallStat from '../../components/card/CardOverallStat'
import Spinner from '../../components/spinner/Spinner'

const propTypes = {
  isFetching: PropTypes.bool,
}

const DetailsGrid = props => (
  <div>
    <Grid stackable>
      <Grid.Row>
        <Grid.Column width={11} style={{ paddingRight: '3.5rem' }}>
          <CardReviewDetail
            review={props.review}
            author={props.review.Author}
            course={props.review.Course}
            prof={props.review.Prof}
            tags={props.review.Tags}
          />

          <CommentContainer
            comments={props.review.Comments}
            commentable="review"
            commentableId={props.review.id}
          />
        </Grid.Column>
        <Grid.Column width={5} style={{ paddingLeft: '1.0rem' }}>

          <CardOverallStat
            Stat={props.review}
          />
          <Divider hidden />

        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)


const ReviewDetails = (props) => {
  if (!props.isFetching) {
    return <DetailsGrid {...props} />
  }
  return <Spinner />
}


ReviewDetails.propTypes = propTypes

export default ReviewDetails
