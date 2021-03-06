import React, { Component } from 'react'
import { Container, Grid, Segment, Button, Icon, Popup, Menu, Header } from 'semantic-ui-react'
import Qrcode from 'qrcode.react'
import Spinner from '../../components/spinner/Spinner'
import SegmentCourseMain from '../../components/segment/SegmentCourseMain'
import CardProfDetail from '../../components/card/CardProfDetail'
import SegmentRatingCharts from '../../components/segment/SegmentRatingCharts'
import ListReview from '../../components/list/ListReview'
import SegmentNoReview from '../../components/segment/SegmentNoReview'
import ModalAddToKelist from '../../components/modal/ModalAddToKelist'

class DetailGrid extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isModalKelistOpen: false,
    }
  }

  openModalKelist = () => {
    this.setState({ isModalKelistOpen: true })
  }
  closeModalKelist = () => {
    this.setState({ isModalKelistOpen: false })
  }

  onClose = () => {

  }

  render() {
    const { } = this.state
    const props = this.props
    const { trigger } = this.props

    let countCollectKelist = 0
    if (props.course.Kelists) {
      countCollectKelist = props.course.Kelists.length
    }

    return (
      <div>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={11} style={{ paddingRight: '3.5rem' }}>
              <SegmentCourseMain {...props.course} />
              <Button.Group attached="bottom" basic labeled>
                <ModalAddToKelist
                  open={this.state.isModalKelistOpen}
                  close={this.closeModalKelist}
                  course={props.course}
                />
                <Button
                  onClick={this.openModalKelist}
                  icon="plus" content={`收藏 (${countCollectKelist})`}
                />
                <Button
                  icon={<Icon color={props.isLiked ? 'red' : 'grey'} name="like" />}
                  content={`喜欢 (${props.countLiked})`}
                  onClick={props.isLiked ?
                    () => { props.unlikeCourse(props.course.id) } :
                    () => { props.likeCourse(props.course.id) }
                  }
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


              {(props.course.Reviews && props.course.Reviews[0]) ?
                <Segment>
                  相关评论：<br />
                  <ListReview reviews={props.course.Reviews} history={props.history} />
                </Segment>
                :
                <SegmentNoReview />
              }
            </Grid.Column>
            <Grid.Column width={5} style={{ paddingLeft: '1.0rem' }}>
              <CardProfDetail {...props.course.Prof} history={props.history} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

const CourseDetail = (props) => {
  if (!props.isFetching) {
    return <DetailGrid {...props} />
  }
  return <Spinner />
}

export default CourseDetail
