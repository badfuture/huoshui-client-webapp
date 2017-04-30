import React from 'react'
import { Container, Card } from 'semantic-ui-react'
import CardRank from '../card/CardRank'
import rankMeta from '../../data/rank.json'

const items = rankMeta

const GridRank = props => (
  <Container>
    <Card.Group itemsPerRow={4} stackable>
      {items.map(
        item => <CardRank
          key={item.id}
          {...item}
          {...props}
        />,
      )}
    </Card.Group>
  </Container>
)

export default GridRank
