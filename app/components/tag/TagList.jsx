import React from 'react'
import { Link } from 'react-router-dom'
import { List, Header } from 'semantic-ui-react'
import tagData from './tag'
import deptData from '../../data/dept.json'

const tagCourseItems = tagData
.filter(tag =>
  tag.category === 'course',
)
.map(tag =>
  <List.Item key={tag.name} style={{ marginLeft: '0px', marginRight: '13px' }}>
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
  <List.Item key={tag.name} style={{ marginLeft: '0px', marginRight: '13px' }}>
    <List.Content style={{ backgroundColor: '#f5f5f5', padding: '3px 11px' }}>
      {tag.name}
    </List.Content>
  </List.Item>,
)

const tagDeptItems = deptData
.map(dept =>
  <List.Item
    as={Link}
    to={`/depts/${dept.header}`}
    key={dept.name}
    style={{ marginLeft: '0px', marginRight: '13px', marginBottom: '5px', color: 'black' }}
  >
    <List.Content style={{ backgroundColor: '#f5f5f5', padding: '3px 11px' }}>
      {dept.header}
    </List.Content>
  </List.Item>,
)

const TagList = () => (
  <div>
    <List horizontal>
      {tagDeptItems}
    </List>
  </div>

)

export default TagList
