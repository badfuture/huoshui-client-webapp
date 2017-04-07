import React from 'react'
import { Statistic, Segment } from 'semantic-ui-react'

const items = [
  { label: '课程', value: '4,767' },
  { label: '老师', value: '2,236' },
  { label: '学生', value: '1,200' },
  { label: '点评', value: '1,495' },
]

const StatSite = () => (
  <Segment inverted style={{ backgroundColor: '#F5F7F8' }}>
    <Statistic.Group items={items} size="mini" color="blue" widths="four" />
  </Segment>
)

export default StatSite
