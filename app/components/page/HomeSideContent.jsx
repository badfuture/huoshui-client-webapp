import React from 'react'
import { Container, Header, Image } from 'semantic-ui-react'
import StatSiteContainer from '../../containers/stat/StatSiteContainer'
import TagList from '../tag/TagList'
import GridTop250 from '../grid/GridTop250'


const imgSrc = '/images/barcode.jpg'
const HomeSideContent = () => (
  <Container>
    <StatSiteContainer />
    <Header as="h3" dividing>热门标签</Header>
    <TagList />

    <Header as="h3" dividing>关注我们</Header>
    <Image src={imgSrc} size="small" />
  </Container>
)

export default HomeSideContent
