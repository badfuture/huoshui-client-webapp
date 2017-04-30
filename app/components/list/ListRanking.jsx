import React from 'react'
import { List } from 'semantic-ui-react'
import ListItemCourse from './ListItemCourse'


const ListRanking = props => (
  <List verticalAlign="middle">
    {props.data.map(item => (
      <ListItemCourse {...item} />
    ))}
  </List>
)

export default ListRanking
