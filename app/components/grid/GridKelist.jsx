import React from 'react'
import { Container, Card } from 'semantic-ui-react'
import CardKelist from '../card/CardKelist'
import dataKelist from '../../data/kelist.json'

const items = dataKelist

const GridKelist = () => (
  <Container>
    <Card.Group itemsPerRow={4} stackable>
      {items.map(
        item => <CardKelist
          {...item}
        />,
      )}
    </Card.Group>
  </Container>
)

export default GridKelist
