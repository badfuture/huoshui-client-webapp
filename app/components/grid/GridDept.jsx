import React from 'react'
import { Container, Card } from 'semantic-ui-react'
import CardDept from '../card/CardDept'
import rankDept from '../../data/dept.json'

const items = rankDept

const GridRanking = () => (
  <Container>
    <Card.Group itemsPerRow={4} stackable>
      {items.map(
        item => <CardDept
          {...item}
        />,
      )}
    </Card.Group>
  </Container>
)

export default GridRanking
