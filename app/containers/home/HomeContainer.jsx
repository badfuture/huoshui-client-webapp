import React from 'react'
import { Grid, Container } from 'semantic-ui-react'
import HomeMainContainer from './HomeMainContainer'
import HomeSideContainer from './HomeSideContainer'

const HomeContainer = () => (
  <Container>
    <Grid stackable padded>
      <Grid.Row>
        <Grid.Column width={11} style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          <HomeMainContainer />
        </Grid.Column>
        <Grid.Column width={5} style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          <HomeSideContainer />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default HomeContainer
