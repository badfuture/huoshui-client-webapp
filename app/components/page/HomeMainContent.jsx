import React from 'react'
import { Container, Divider, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import CardExample from '../card/CardExample'
import SegmentNewReview from '../segment/SegmentNewReview'
import SegmentHotReview from '../segment/SegmentHotReview'
import SegmentHotCourse from '../segment/SegmentHotCourse'

const HomeMainContent = () => (
  <div>
    <Header as="h3" dividing>
        最新评论
        <Link
          to="/reviews"
          style={{ float: 'right', fontSize: '0.8em', color: 'rgba(33, 133, 208, 0.8)' }}
        >
          更多»
        </Link>
    </Header>
    <SegmentNewReview />
    <Divider hidden />

    <Header as="h3" dividing>
      最受关注的课程
      <Link
        to="/rankings/hot"
        style={{ float: 'right', fontSize: '0.8em', color: 'rgba(33, 133, 208, 0.8)' }}
      >
        更多»
      </Link>
    </Header>
    <SegmentHotCourse />
    <Divider hidden />

    <Header as="h3" dividing>
      精选课列
      <Link
        to="/rankings/hot"
        style={{ float: 'right', fontSize: '0.8em', color: 'rgba(33, 133, 208, 0.8)' }}
      >
        更多»
      </Link>
    </Header>

    <Container>
      <CardExample />
    </Container>
    <Divider hidden />

    <Header as="h3" dividing>
        最热评论
        <Link
          to="/reviews"
          style={{ float: 'right', fontSize: '0.8em', color: 'rgba(33, 133, 208, 0.8)' }}
        >
          更多»
        </Link>
    </Header>
    <SegmentHotReview />
    <Divider hidden />
  </div>
)

export default HomeMainContent
