import React from 'react'
import { Grid, Container } from 'semantic-ui-react'
import HomeMainContainer from './HomeMainContainer'
import HomeSideContainer from './HomeSideContainer'

const HomeContainer = () => (
  <Container>
    <Grid stackable>
      <Grid.Row>
        <Grid.Column width={11} style={{ paddingRight: '1.5rem' }}>
          <HomeMainContainer />
        </Grid.Column>
        <Grid.Column width={5} style={{ paddingLeft: '1.5rem' }}>
          <HomeSideContainer />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default HomeContainer
