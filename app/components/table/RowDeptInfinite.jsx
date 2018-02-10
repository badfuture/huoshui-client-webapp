import React from 'react'
import { Header, Image, Table, Icon } from 'semantic-ui-react'
import Rating from '../rating/RatingBasic'

const RowCourseStandard = props => (
  <Table.Row>
    <Table.Cell
      onClick={() => {
        props.history.push(`/courses/${props.id}`)
      }}
      singleLine
      style={{ padding: '1.5em' }}
    >
      <Header as="h4" image>
        <Image src={props.Depts[0].icon} rounded size="mini" />
        <Header.Content>
          {props.Prof.name}
          <Header.Subheader>{props.name}</Header.Subheader>
        </Header.Content>
      </Header>
    </Table.Cell>
    <Table.Cell>
      {props.Stat.countReview}
    </Table.Cell>
    <Table.Cell textAlign="center" collapsing>
      <Rating hideFen value={props.Stat.scoreOverall} />
    </Table.Cell>
    <Table.Cell textAlign="center">
      {props.Stat.professional.toFixed(1)}
    </Table.Cell>
    <Table.Cell textAlign="center">
      {props.Stat.expressive.toFixed(1)}
    </Table.Cell>
    <Table.Cell textAlign="center">
      {props.Stat.kind.toFixed(1)}
    </Table.Cell>
  </Table.Row>
)
export default RowCourseStandard
