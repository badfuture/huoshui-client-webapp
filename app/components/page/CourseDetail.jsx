import React from 'react'
import { Grid } from 'semantic-ui-react'
import Spinner from '../../components/spinner/Spinner'

const DetailGrid = props => (
  <div>
    <Grid stackable>
      <Grid.Row>
        <Grid.Column width={11} style={{ paddingRight: '3.5rem' }}>
          Left Container
        </Grid.Column>
        <Grid.Column width={5} style={{ paddingLeft: '1.0rem' }}>
          Right Container
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
