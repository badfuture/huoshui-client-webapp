import React from 'react'
import { Container, Divider, Header } from 'semantic-ui-react'
import CardExample from '../card/CardExample'
import SegmentNewReview from '../segment/SegmentNewReview'
import SegmentHotCourse from '../segment/SegmentHotCourse'

const HomeMainContent = () => (
  <div>

    <Header as="h3" dividing >最新评论</Header>
    <SegmentNewReview />
    <Divider hidden />

    <Header as="h3" dividing>最受关注的课程</Header>
    <SegmentHotCourse />
    <Divider hidden />

    <Header as="h3" dividing>精选课单</Header>
    <Container>
      <CardExample />
    </Container>
    <Divider hidden />

  </div>
)

export default HomeMainContent
