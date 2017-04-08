import React from 'react'

import { List, Header } from 'semantic-ui-react'
import tagData from './tag'


const tagCourseItems = tagData
.filter(tag =>
  tag.category === 'course',
)
.map(tag =>
  <List.Item style={{ marginLeft: '0px', marginRight: '13px' }}>
    <List.Content style={{ backgroundColor: '#f5f5f5', padding: '3px 11px' }}>
      {tag.name}
    </List.Content>
  </List.Item>,
)
const tagProfItems = tagData
.filter(tag =>
  tag.category === 'prof',
)
.map(tag =>
  <List.Item style={{ marginLeft: '0px', marginRight: '13px' }}>
    <List.Content style={{ backgroundColor: '#f5f5f5', padding: '3px 11px' }}>
      {tag.name}
    </List.Content>
  </List.Item>,
)

const TagList = () => (
  <div>
    <Header sub>课程</Header>
    <List horizontal>
      {tagCourseItems}
    </List>

    <Header sub>老师</Header>
    <List horizontal>
      {tagProfItems}
    </List>
  </div>

)

export default TagList