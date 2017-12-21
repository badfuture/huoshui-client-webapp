import React, { PropTypes } from 'react'
import { Container, Card } from 'semantic-ui-react'
import CardMyReview from '../card/CardMyReview'

const propTypes = {
  items: PropTypes.array.isRequired,
  itemsPerRow: PropTypes.number.isRequired,
}

const GridMyReview = props => (
  <Container>
    <Card.Group itemsPerRow={props.itemsPerRow} stackable>
      {props.items.map(
        item =>
          <CardMyReview
            history={props.history}
            key={item.id}
            {...item}
          />,
      )}
    </Card.Group>
  </Container>
)

GridMyReview.propTypes = propTypes
export default GridMyReview
