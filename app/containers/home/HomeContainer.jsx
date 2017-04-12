import React from 'react'
import { Grid, Container } from 'semantic-ui-react'
import HomeMainContainer from './HomeMainContainer'
import HomeSideContainer from './HomeSideContainer'

const HomeContainer = () => (
  <div className="container-main">
    <Container>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={11} style={{ paddingRight: '3.5rem' }}>
            <HomeMainContainer />
          </Grid.Column>
          <Grid.Column width={5} style={{ paddingLeft: '1.0rem' }}>
            <HomeSideContainer />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
)

export default HomeContainer
