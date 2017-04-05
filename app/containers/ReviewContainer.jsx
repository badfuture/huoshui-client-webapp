import React from 'react'
import { Container, Grid, Segment, Divider } from 'semantic-ui-react'
import ChartPieLabel from '../components/chart/ChartPieLabel'
import ChartPieGap from '../components/chart/ChartPieGap'
import ListNewReview from '../components/list/ListNewReview'
import ListPopularReview from '../components/list/ListPopularReview'

const ReviewContainer = () => (
  <Container>
    <Container>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={8}>
            <Segment inverted color="blue">
              最新评价
            </Segment>
            <ListNewReview />
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment inverted color="violet">
              热门评价
            </Segment>
            <ListPopularReview />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>

    <Divider hidden />

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
