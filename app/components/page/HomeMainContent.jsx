import React from 'react'
import { Container, Grid, Divider, Segment, Button, Card, Header } from 'semantic-ui-react'
import CardExample from '../card/CardExample'
import CardFeed from '../card/CardFeed'

const HomeMainContent = () => (
  <div>
    <Header as="h3" dividing>推荐课程</Header>
    <Container>
      <Card.Group itemsPerRow={3} stackable>
        <CardFeed />
        <CardFeed />
        <CardFeed />
      </Card.Group>
    </Container>
    <Divider hidden />

    <Header as="h3" dividing>热门课程</Header>
    <Container>
      <Card.Group itemsPerRow={3} stackable>
        <CardFeed />
        <CardFeed />
        <CardFeed />
      </Card.Group>
    </Container>
    <Divider hidden />

    <Header as="h3" dividing>精选课单</Header>
    <Container>
      <CardExample />
    </Container>
    <Divider hidden />

    <Header as="h3" dividing>最新评论</Header>
    <Container>
      <Card.Group itemsPerRow={3} stackable>
        <CardFeed />
        <CardFeed />
        <CardFeed />
      </Card.Group>
    </Container>
    <Divider hidden />

    <Header as="h3" dividing>热门评论</Header>
    <Container>
      <Card.Group itemsPerRow={3} stackable>
        <CardFeed />
        <CardFeed />
        <CardFeed />
      </Card.Group>
    </Container>

    <Header as="h3" dividing>其它</Header>
    <Container>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={8}>
            <Segment.Group>
              <Segment inverted color="blue">
                Header 1
              </Segment>
            </Segment.Group>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment.Group>
              <Segment inverted color="violet">
                Header 2
              </Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    <Divider hidden />

    <Container textAlign="center">
      <Button secondary>Start Battle</Button>
      <Button secondary>Repick Courses</Button>
    </Container>
  </div>
)

export default HomeMainContent
