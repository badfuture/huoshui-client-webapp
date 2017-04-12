import React from 'react'
import { Grid, Container } from 'semantic-ui-react'
import CardUserProfile from '../components/card/CardUserProfile'
import FeedExample from '../components/feed/FeedExample'


const MyProfileContainer = () => (
  <div className="container-main-grey">
    <Container>
      <Grid columns={3} padded="vertically" stackable divided>
        <Grid.Row>
          <Grid.Column width={5}>
            <Container textAlign="center">
              <CardUserProfile />
            </Container>
          </Grid.Column>
          <Grid.Column width={5}>
            <Container>
              <FeedExample />
            </Container>
          </Grid.Column>
          <Grid.Column width={5}>
            <Container>
              <FeedExample />
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>

)

export default MyProfileContainer
