import React from 'react'
import { Container, Divider, Card } from 'semantic-ui-react'
import CardKelist from '../card/CardKelist'


const GridKelist = () => (
  <Container>
    <Card.Group itemsPerRow={4} stackable>
      <CardKelist />
      <CardKelist />
      <CardKelist />
      <CardKelist />
    </Card.Group>
    <Divider hidden />
    <Card.Group itemsPerRow={4} stackable>
      <CardKelist />
      <CardKelist />
      <CardKelist />
      <CardKelist />
    </Card.Group>
  </Container>
)

export default GridKelist
