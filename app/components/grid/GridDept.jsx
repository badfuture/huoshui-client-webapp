import React from 'react'
import { Container, Divider, Card } from 'semantic-ui-react'
import CardDept from '../card/CardDept'


const GirdDept = () => (
  <Container>
    <Card.Group itemsPerRow={4} stackable>
      <CardDept />
      <CardDept />
      <CardDept />
      <CardDept />
    </Card.Group>
    <Divider hidden />
    <Card.Group itemsPerRow={4} stackable>
      <CardDept />
      <CardDept />
      <CardDept />
      <CardDept />
    </Card.Group>
  </Container>
)

export default GirdDept
