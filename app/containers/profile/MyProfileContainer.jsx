import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Container, Segment, Item, Icon, List, Header } from 'semantic-ui-react'
import CardUserProfile from '../../components/card/CardUserProfile'


const OptionItem = props => (
  <Link to={props.to}>
    <Segment color={props.color} >
      <List horizontal >
        <List.Item >
          <Icon name={props.icon} size="big" />
          <List.Content>
            <Header as="h4" size="medium">
              {props.title}
            </Header>
            <p style={{ color: '#93999f' }}>
              {props.description}
            </p>
          </List.Content>
        </List.Item>
      </List>
    </Segment>
  </Link>
)

const OptionsGrid = () => (
  <Grid columns={2} padded="vertically" stackable>
    <Grid.Row>
      <Grid.Column width={8}>
        <Container>
          <OptionItem
            title="我的课评"
            color="blue"
            icon="edit"
            description="我创建或喜欢的课评"
            to="/my-review"
          />
        </Container>
      </Grid.Column>
      <Grid.Column width={8}>
        <Container>
          <OptionItem
            title="我的老师" color="blue" icon="address book outline"
            description="我关注的老师"
            to="/my-prof"
          />
        </Container>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={8}>
        <Container>
          <OptionItem
            title="我的课程" color="blue" icon="book"
            description="我收藏的课程"
            to="/my-kelist"
          />
        </Container>
      </Grid.Column>
      <Grid.Column width={8}>
        <Container>
          <OptionItem
            title="我的课单" color="blue" icon="list"
            description="我创建或收藏的课单"
            to="/my-kelist"
          />
        </Container>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

const MyProfileContainer = () => (
  <div className="container-main-grey">
    <Container>
      <Grid padded="vertically" stackable divided centered>
        <Grid.Row>
          <Grid.Column width={5}>
            <Container textAlign="center">
              <CardUserProfile />
            </Container>
          </Grid.Column>
          <Grid.Column width={11}>
            <Container style={{ padding: '0em 2em 0em 2em' }}>
              <OptionsGrid />
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>

)

export default MyProfileContainer
