import React from 'react'
import { List } from 'semantic-ui-react'
import ListItemCourse from './ListItemCourse'


const ListCourse = props => (
  <List verticalAlign="middle">
    {props.data.map(item => (
      <ListItemCourse {...item} {...props} />
    ))}
  </List>
)

export default ListCourse
