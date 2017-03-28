import React, {PropTypes} from 'react'
import {Container, Grid, Divider, Segment, Button, Card} from 'semantic-ui-react'
import CardExample from './CardExample'
import CardFeed from './CardFeed'


class PageHome extends React.Component {
  render(){
    return (
      <div>
        <Container>
          <CardExample/>
        </Container>
        <Divider hidden />

        <Container>
          <Card.Group itemsPerRow={3} stackable={true}>
            <CardFeed/>
            <CardFeed/>
            <CardFeed/>
          </Card.Group>
        </Container>
        <Divider hidden />

        <Divider hidden />
        <Container>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={8}>
                <Segment.Group>
                  <Segment inverted color='blue'>
                    Header 1
                  </Segment>
                </Segment.Group>
              </Grid.Column>
              <Grid.Column width={8}>
                <Segment.Group>
                  <Segment inverted color='violet'>
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
  }
}

export default PageHome
