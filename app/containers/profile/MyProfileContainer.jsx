import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Grid, Container, Segment, Item, Icon, List, Header } from 'semantic-ui-react'
import localStore from 'store'
import CardUserProfile from '../../components/card/CardUserProfile'
import MenuProfile from '../../components/menu/MenuProfile'
import GridMyReview from '../../components/grid/GridMyReview'
import SegmentEmptyProfile from '../../components/segment/SegmentEmptyProfile'

class MyProfileContainer extends Component {

  constructor() {
    super()
    this.state = {
      activeTab: 'review',
      reviews: [],
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeTab: name })
  }

  componentDidMount() {
  }

  render() {
    return (
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
                  <MenuProfile
                    onTabClick={this.handleItemClick}
                    activeTab={this.state.activeTab}
                  />
                  {
                    (this.state.activeTab === 'review' && this.props.user.Reviews.length != 0) &&
                    <GridMyReview
                      items={this.props.user.Reviews}
                      itemsPerRow={3}
                    />
                  }
                  {
                    (this.state.activeTab === 'review' && this.props.user.Reviews.length == 0) &&
                    <SegmentEmptyProfile
                      header="我的课评"
                      subheader="在课程页或右边栏发起的点评"
                    />
                  }
                  {
                    (this.state.activeTab === 'course' && this.props.user.Reviews.length == 0) &&
                    <SegmentEmptyProfile
                      header="我喜欢的课程"
                      subheader="在课程页点击过喜欢的课程会出现在这里"
                    />
                  }
                  {
                    (this.state.activeTab === 'prof' && this.props.user.Reviews.length == 0) &&
                    <SegmentEmptyProfile
                      header="我喜欢的老师"
                      subheader="在教授档案里点击过喜欢的老师会出现在这里"
                    />
                  }
                  {
                    (this.state.activeTab === 'kelist' && this.props.user.Reviews.length == 0) &&
                    <SegmentEmptyProfile
                      header="我的课列"
                      subheader="我收藏或创建的课列会出现在这里"
                    />
                  }
                  {
                    (this.state.activeTab === 'message' && this.props.user.Reviews.length == 0) &&
                    <SegmentEmptyProfile
                      header="我的消息"
                      subheader="我收到评论的课评会出现在这里"
                    />
                  }
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }
}

// map redux states to prop
const mapStateToProps = state => ({
  user: state.auth.user,
})

// map redux actions to prop
const mapActionToProps = dispatch => ({
})

export default connect(mapStateToProps, mapActionToProps)(MyProfileContainer)
