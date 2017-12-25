import React from 'react'
import { Grid, Container, Segment, Item, Divider } from 'semantic-ui-react'
import Spinner from '../../components/spinner/Spinner'
import CardProfOverview from '../../components/card/CardProfOverview'
import MenuProfDetail from '../../components/menu/MenuProfDetail'
import RatingBasic from '../../components/rating/RatingBasic'
import ListReview from '../../components/list/ListReview'
import SegmentRatingCharts from '../../components/segment/SegmentRatingCharts'

import {
  INFO, STAT, EDUCATION, RESEARCH, COURSE,
} from '../../constants/MenuProfStates'

const CourseList = props => (
  <Item.Group divided>
    {props.courses.map(course => (
      <Item
        key={course.id}
        onClick={() => { props.history.push(`/courses/${course.id}`) }}
        style={{ padding: '5px 0px' }}
      >
        <Item.Content>
          <Item.Meta>
            <span>{course.name}</span>
          </Item.Meta>
          <Item.Extra>
            <div style={{ marginTop: '0em' }}>
              <RatingBasic value={course.scoreOverall} />
            </div>
          </Item.Extra>
        </Item.Content>
      </Item>
    ))}
  </Item.Group>
)

const DetailGrid = props => (
  <div>
    <Grid stackable>
      <Grid.Row>
        <Grid.Column width={5} style={{ paddingRight: '3.5rem' }}>
          <Container style={{ textAlign: 'center' }}>
            <CardProfOverview
              {...props.prof}
              likeProf={props.likeProf}
            />
          </Container>
        </Grid.Column>
        <Grid.Column width={11} style={{ paddingLeft: '1.0rem' }}>
          <MenuProfDetail />
          {
            (props.currentView === INFO) &&
            <Segment>
              { (props.prof.name) ? <span>姓名：{props.prof.name} <br /></span> : ''}
              { (props.prof.Position) ? <span>职位：{props.prof.Position.name} <br /></span> : ''}
              { (props.prof.exp) ? <span>教龄：{props.prof.exp}年 <br /></span> : ''}
              { (props.prof.email) ? <span>邮箱：{props.prof.email} <br /></span> : ''}
              { (props.prof.phone) ? <span>电话：{props.prof.phone} <br /></span> : ''}
              { (props.prof.Depts && props.prof.Depts[0]) ? <span>学院：{props.prof.Depts[0].longname} <br /></span> : ''}
              { (props.prof.intro) ? <span>简介：{props.prof.intro} <br /></span> : ''}
            </Segment>
          }
          {
            (props.currentView === STAT) && <SegmentRatingCharts {...props.prof} />
          }
          {
            (props.currentView === EDUCATION) && <Segment>
              {props.prof.education ? props.prof.education : '暂无教育成果信息～'}
            </Segment>
          }
          {
            (props.currentView === RESEARCH) && <Segment>
              {props.prof.research ? props.prof.research : '暂无研究方向信息～'}
            </Segment>
          }
          {
            (props.currentView === COURSE) && <Segment>
              {(props.prof.Courses && props.prof.Courses[0]) ?
                <CourseList courses={props.prof.Courses} history={props.history} /> :
                <div>
                  <br />暂无相关课程信息~
                </div>
              }
            </Segment>
          }
          <Divider
            horizontal
            style={{ margin: '1.0em 0em' }}
          />
          <Segment>
            相关评论：<br />
            {(props.prof.Reviews && props.prof.Reviews[0]) ?
              <ListReview reviews={props.prof.Reviews} history={props.history} /> :
              <div>
                <br />暂无相关评论~
              </div>
            }
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)


const ProfDetail = (props) => {
  if (!props.isFetching) {
    return <DetailGrid {...props} />
  }
  return <Spinner />
}

export default ProfDetail
