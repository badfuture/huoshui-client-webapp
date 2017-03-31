import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import ChartPieLabel from '../components/chart/ChartPieLabel'
import ChartPieGap from '../components/chart/ChartPieGap'

const ReviewContainer = () => (
  <Container>
    <Grid columns={4} padded="vertically" divided stackable>
      <Grid.Row>
        <Grid.Column width={4}>
          <Container style={{ width: '100%', height: '200px' }}>
            <ChartPieLabel />
          </Container>
        </Grid.Column>
        <Grid.Column width={4}>
          <Container style={{ width: '100%', height: '200px' }}>
            <ChartPieGap />
          </Container>
        </Grid.Column>
        <Grid.Column width={4}>
          <Container style={{ width: '100%', height: '200px' }}>
            <ChartPieLabel />
          </Container>
        </Grid.Column>
        <Grid.Column width={4}>
          <Container style={{ width: '100%', height: '200px' }}>
            <ChartPieGap />
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>

  </Container>
)

export default ReviewContainer
