import React, { PropTypes } from 'react'
import { Container, Card } from 'semantic-ui-react'
import CardMyProf from '../card/CardMyProf'

const propTypes = {
  items: PropTypes.array.isRequired,
  itemsPerRow: PropTypes.number.isRequired,
}

const GridMyProf = props => (
  <Container>
    <Card.Group itemsPerRow={props.itemsPerRow} stackable>
      {props.items.map(
        item =>
          <CardMyProf
            history={props.history}
            key={item.id}
            {...item}
          />,
      )}
    </Card.Group>
  </Container>
)

GridMyProf.propTypes = propTypes
export default GridMyProf
