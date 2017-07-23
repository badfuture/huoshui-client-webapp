import React, { PropTypes } from 'react'
import { Container, Card } from 'semantic-ui-react'
import CardReviewOverview from '../card/CardReviewOverview'

const propTypes = {
  items: PropTypes.array.isRequired,
}

const GridReview = props => (
  <Container>
    <Card.Group itemsPerRow={5} stackable>
      {props.items.map(
        item =>
          <CardReviewOverview
            history={props.history}
            key={item.id}
            {...item}
          />,
      )}
    </Card.Group>
  </Container>
)

GridReview.propTypes = propTypes
export default GridReview
