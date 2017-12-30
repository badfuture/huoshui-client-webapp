import React, { PropTypes } from 'react'
import { Container, Card } from 'semantic-ui-react'
import CardCourseOverview from '../card/CardCourseOverview'

const propTypes = {
  items: PropTypes.array.isRequired,
  itemsPerRow: PropTypes.number.isRequired,
}

const GridCourse = props => (
  <Container>
    <Card.Group itemsPerRow={props.itemsPerRow} stackable>
      {props.items.map(
        item =>
          <CardCourseOverview
            history={props.history}
            key={item.id}
            isTagShown={props.isTagShown}
            {...item}
          />,
      )}
    </Card.Group>
  </Container>
)

GridCourse.propTypes = propTypes
export default GridCourse
