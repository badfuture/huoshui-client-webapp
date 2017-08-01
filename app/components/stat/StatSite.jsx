import React from 'react'
import { Statistic, Segment } from 'semantic-ui-react'

const StatSite = props => (
  <Segment inverted style={{ backgroundColor: '#F5F7F8' }}>
    <Statistic.Group size="mini" color="blue" widths="four">
      <Statistic>
        <Statistic.Value>课程</Statistic.Value>
        <Statistic.Label>{props.count && props.count.course}</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>老师</Statistic.Value>
        <Statistic.Label>{props.count && props.count.prof}</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>学生</Statistic.Value>
        <Statistic.Label>{props.count && props.count.user}</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>点评</Statistic.Value>
        <Statistic.Label>{props.count && props.count.review}</Statistic.Label>
      </Statistic>
    </Statistic.Group>
  </Segment>
)

export default StatSite
