import React from 'react'
import { Container, Grid, Segment, Button, Icon, Popup, Menu, Header } from 'semantic-ui-react'
import Qrcode from 'qrcode.react'
import Spinner from '../../components/spinner/Spinner'
import SegmentCourseMain from '../../components/segment/SegmentCourseMain'
import CardProfDetail from '../../components/card/CardProfDetail'
import SegmentRatingCharts from '../../components/segment/SegmentRatingCharts'
import ListReview from '../../components/list/ListReview'

const DetailGrid = props => (
  <div>
    <Grid stackable>
      <Grid.Row>
        <Grid.Column width={11} style={{ paddingRight: '3.5rem' }}>
          <SegmentCourseMain {...props.course} />
          <Button.Group attached="bottom" basic labeled>
            <Button icon="plus" content="收藏 (3)" />
            <Button
              icon={<Icon color="red" name="like" />}
              content="喜欢 (2)"
              onClick={props.likeCourse}
            />

            <Popup
              trigger={
                <Button
                  icon="share alternate" content="分享"
                />
              }
              content={
                <Menu size="tiny" vertical text fluid>
                  <Menu.Item name="qq" onClick={props.shareToQQ}>
                    <Button
                      color="twitter"
                      icon={<Icon name="qq" />}
                      circular
                    />
                    QQ好友
                  </Menu.Item>
                  <Menu.Item name="weibo" onClick={props.shareToWeibo}>
                    <Button
                      color="google plus"
                      icon={<Icon name="weibo" />}
                      circular
                    />
                    新浪微博
                  </Menu.Item>
                  <Menu.Item name="wechat" onClick={() => {}}>
                    <Popup
                      trigger={
                        <div>
                          <Button
                            color="green"
                            icon={<Icon name="wechat" />}
                            circular
                          />
                          微信
                        </div>
                      }
                      content={
                        <div>
                          <Header size="small">请在微信"发现"里扫码</Header>
                          <Qrcode value="https://m.huoshui.org/courses/2931" />
                        </div>
                      }
                      on="click"
                      position="right center"
                    />

                  </Menu.Item>
                </Menu>
              }
              on="click"
              position="bottom center"
            />
            <Button
              icon="pencil" content="点评"
              onClick={() => { props.openAddReviewModal(props.course.id) }}
            />
          </Button.Group>
          <SegmentRatingCharts {...props.course} />
          <Segment>
            相关评论：<br />
            {(props.course.Reviews && props.course.Reviews[0]) ?
              <ListReview reviews={props.course.Reviews} history={props.history} /> :
              <div>
                <br />暂无相关评论~
              </div>
            }

          </Segment>
        </Grid.Column>
        <Grid.Column width={5} style={{ paddingLeft: '1.0rem' }}>
          <CardProfDetail {...props.course.Prof} history={props.history} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)


const ReviewDetail = (props) => {
  if (!props.isFetching) {
    return <DetailGrid {...props} />
  }
  return <Spinner />
}

export default ReviewDetail
