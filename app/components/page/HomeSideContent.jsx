import React from 'react'
import { Container, Header, Image, Grid, Item, Transition, Feed, Icon } from 'semantic-ui-react'
import StatSiteContainer from '../../containers/stat/StatSiteContainer'
import QuoteProf from '../../components/quote/QuoteProf'

import TagList from '../tag/TagList'

const imgSrcSwjtu = '/images/barcode/wechat_swjtu_tool_set.png'
const imgSrcFoundation = '/images/barcode/wechat_third_foundation.png'

const HomeSideContent = props => (
  <Container>
    <StatSiteContainer />

    <Header as="h3" dividing>教师语录</Header>
    <QuoteProf />

    <Header as="h3" dividing>主要院系</Header>
    <TagList />

    <Header as="h3" dividing>客户端</Header>
    <Transition animation="bounce" duration={1500} visible={props.isVisible} >
      <Item.Group relaxed onClick={props.shake} >
        <Item style={{ backgroundColor: 'whitesmoke', padding: '0.25em' }}>
          <Item.Image
            size="tiny" src="/images/logo/logo_mobile.png"
            style={{ padding: '0em 0em 0em 1.0em', width: '70px' }}
          />
          <Item.Content verticalAlign="middle">
            <Item.Header style={{ fontSize: '1.1em' }}>
            活水移动客户端
          </Item.Header>
            <Item.Meta>
              <span>不再沉默</span>
            </Item.Meta>
          </Item.Content>
        </Item>
      </Item.Group>
    </Transition>

    <Header as="h3" dividing>关注我们</Header>
    <Grid >
      <Grid.Row>
        <Grid.Column width={8} style={{ paddingLeft: '1em', paddingRight: '0.1em' }}>
          <Image src={imgSrcFoundation} size="small" />
          <Header as="h4" textAlign="center" style={{ marginTop: '0.45em' }}>微信：第三基地</Header>
        </Grid.Column>
        <Grid.Column width={8} style={{ paddingLeft: '0.1em', paddingRight: '1.1em' }}>
          <Image src={imgSrcSwjtu} size="small" />
          <Header as="h4" textAlign="center" style={{ marginTop: '0.45em' }}>微信：交大瑞士刀</Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>

  </Container>
)

export default HomeSideContent
