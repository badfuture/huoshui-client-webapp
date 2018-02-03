import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Grid, Container, Segment, Item, Icon, List, Header } from 'semantic-ui-react'
import localStore from 'store'
import * as authActions from '../../actions/authActions'
import CardUserProfile from '../../components/card/CardUserProfile'
import MenuProfile from '../../components/menu/MenuProfile'
import GridMyReview from '../../components/grid/GridMyReview'
import GridCourse from '../../components/grid/GridCourse'
import GridMyProf from '../../components/grid/GridMyProf'
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
    this.props.getLatestUserInfo()
    console.log('componentDidMount')
    let urlHash = this.props.location.hash.substr(1)
    urlHash = urlHash || 'review'
    this.setState({ activeTab: urlHash })
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
    const { location } = nextProps
    const nextHash = location.hash.substr(1)
    const urlHash = nextHash || 'review'
    this.setState({ activeTab: urlHash })
  }

  render() {
    const showReview = this.state.activeTab === 'review' &&
                        this.props.user && this.props.user.Reviews && !!this.props.user.Reviews.length
    const showCourse = this.state.activeTab === 'course' &&
                        this.props.user && this.props.user.LikedCourses && !!this.props.user.LikedCourses.length
    const showProf = this.state.activeTab === 'prof' &&
                        this.props.user && this.props.user.LikedProfs && !!this.props.user.LikedProfs.length
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
                    (showReview) &&
                    <GridMyReview
                      items={this.props.user.Reviews}
                      itemsPerRow={3}
                    />
                  }
                  {
                    (!showReview && this.state.activeTab === 'review') &&
                    <SegmentEmptyProfile
                      header="我的课评"
                      subheader="在课程页或右边栏发起的点评"
                    />
                  }

                  {
                    (showCourse) &&
                    <GridCourse
                      items={this.props.user.LikedCourses}
                      itemsPerRow={3}
                    />
                  }
                  {
                    (!showCourse && this.state.activeTab === 'course') &&
                    <SegmentEmptyProfile
                      header="我喜欢的课程"
                      subheader="在课程页点击过喜欢的课程"
                    />
                  }
                  {
                    (showProf) &&
                    <GridMyProf
                      items={this.props.user.LikedProfs}
                      itemsPerRow={3}
                      {...this.props}
                    />
                  }
                  {
                    (!showProf && this.state.activeTab === 'prof') &&
                    <SegmentEmptyProfile
                      header="我喜欢的老师"
                      subheader="在教授档案里点击过喜欢的老师"
                    />
                  }
                  {
                    (this.state.activeTab === 'kelist') &&
                    <SegmentEmptyProfile
                      header="我的课列"
                      subheader="我收藏或创建的课列"
                    />
                  }
                  {
                    (this.state.activeTab === 'message') &&
                    <SegmentEmptyProfile
                      header="我的消息"
                      subheader="我收到评论的课评"
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
  getLatestUserInfo: () => dispatch(authActions.getLatestUserInfo()),
})

export default connect(mapStateToProps, mapActionToProps)(MyProfileContainer)
