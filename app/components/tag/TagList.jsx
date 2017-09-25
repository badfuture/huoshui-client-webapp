import React from 'react'
import { Link } from 'react-router-dom'
import { List } from 'semantic-ui-react'
import deptData from '../../data/dept.json'

const tagDeptItems = deptData
.map(dept =>
  <List.Item
    as={Link}
    to={`/depts/${dept.header}`}
    key={dept.header}
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
