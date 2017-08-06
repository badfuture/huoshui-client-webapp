import React from 'react'
import { Container, Divider, Card, Header } from 'semantic-ui-react'
import CardExample from '../card/CardExample'
import CardFeed from '../card/CardFeed'
import CardCourseOverview from '../card/CardCourseOverview'
import SegmentHotReview from '../segment/SegmentHotReview'
import SegmentNewReview from '../segment/SegmentNewReview'

const HomeMainContent = () => (
  <div>

    <Header as="h3" dividing>最新评论</Header>
    <SegmentNewReview />
    <Divider hidden />

    <Header as="h3" dividing>最受关注的课程</Header>
    <Container>
      <Card.Group itemsPerRow={3} stackable>
        <CardCourseOverview />
        <CardCourseOverview />
        <CardCourseOverview />
        <CardCourseOverview />
        <CardCourseOverview />
        <CardCourseOverview />
      </Card.Group>
    </Container>
    <Divider hidden />

    <Header as="h3" dividing>精选课单</Header>
    <Container>
      <CardExample />
    </Container>
    <Divider hidden />

  </div>
)

export default HomeMainContent
