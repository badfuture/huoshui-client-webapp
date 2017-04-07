import React from 'react'
import { Container, Grid, Image, Label, Segment } from 'semantic-ui-react'

const srcImage = '/images/dept/icons/Microchip.png'
const srcImage2 = '/images/dept/icons/hotair.png'

const GridTop250 = () => (
  <Container>
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Segment padded>
            <Label attached="bottom"><a>大学计算机基础</a></Label>
            <Image src={srcImage} />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment padded>
            <Label attached="bottom"><a>大学计算机基础</a></Label>
            <Image src={srcImage} />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment padded>
            <Label attached="bottom"><a>大学计算机基础</a></Label>
            <Image src={srcImage} />
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Segment padded>
            <Label attached="bottom"><a>热气球飞行学</a></Label>
            <Image src={srcImage2} />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment padded>
            <Label attached="bottom"><a>热气球飞行学</a></Label>
            <Image src={srcImage2} />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment padded>
            <Label attached="bottom"><a>热气球飞行学</a></Label>
            <Image src={srcImage2} />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default GridTop250
