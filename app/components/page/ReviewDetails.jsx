import React, { PropTypes } from 'react'
import { Grid, Divider } from 'semantic-ui-react'
import CommentExample from '../../components/comment/CommentExample'
import CardProfDetail from '../../components/card/CardProfDetail'
import CardReviewDetail from '../../components/card/CardReviewDetail'
import Spinner from '../../components/spinner/Spinner'

const propTypes = {
  isFetching: PropTypes.bool,
}

const DetailsGrid = props => (
  <div>
    <Grid stackable>
      <Grid.Row>
        <Grid.Column width={11} style={{ paddingRight: '3.5rem' }}>
          <CardReviewDetail {...props} />
          <Divider hidden />
          <CommentExample />
        </Grid.Column>
        <Grid.Column width={5} style={{ paddingLeft: '1.0rem' }}>
          <CardProfDetail {...props} />
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
