import React from 'react'
import { Header, Image, Table, Icon } from 'semantic-ui-react'
import Rating from '../rating/RatingBasic'

const RowStandard = (props) => {
  let isLeading = false
  if (props.index < 3) {
    isLeading = true
  }

  return (
    <Table.Row warning={isLeading}>
      <Table.Cell style={{ padding: '1.5em' }}>
        {props.index + 1}
      </Table.Cell>
      <Table.Cell
        onClick={() => {
          props.history.push(`/courses/${props.id}`)
        }}
        singleLine
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
}


const TableCourseStandard = props => (
  <Table celled structured striped compact color="blue">
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell rowSpan="2">排名</Table.HeaderCell>
        <Table.HeaderCell rowSpan="2">课程</Table.HeaderCell>
        <Table.HeaderCell rowSpan="2">评价人数</Table.HeaderCell>
        <Table.HeaderCell rowSpan="2">综合打分</Table.HeaderCell>
        <Table.HeaderCell colSpan="3">核心评价</Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>专业</Table.HeaderCell>
        <Table.HeaderCell>表达</Table.HeaderCell>
        <Table.HeaderCell>友好</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>

      {props.data.map((item, index) => (
        <RowStandard {...item} {...props} key={index} index={index} />
      ))}
    </Table.Body>
  </Table>
)

export default TableCourseStandard
