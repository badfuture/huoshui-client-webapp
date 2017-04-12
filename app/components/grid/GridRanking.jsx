import React from 'react'
import { Container, Card } from 'semantic-ui-react'
import CardRanking from '../card/CardRanking'
import rankMeta from '../../data/rank.json'

const items = rankMeta

const GridRanking = () => (
  <Container>
    <Card.Group itemsPerRow={4} stackable>
      {items.map(
        item => <CardRanking
          {...item}
        />,
      )}
    </Card.Group>
  </Container>
)

export default GridRanking
