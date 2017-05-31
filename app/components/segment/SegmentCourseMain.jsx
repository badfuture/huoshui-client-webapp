import React, { PropTypes } from 'react'
import { Card, Header, Icon, Divider, Segment, Table, Grid } from 'semantic-ui-react'

const SegmentCourseMain = props => (
  <Segment>
    <Header as="h4">
      课程：{props.name}
    </Header>

    <Table basic="very" >
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Icon name="calendar outline" size="big" color="grey" />
            &nbsp;点名：不点
          </Table.Cell>
          <Table.Cell>
            <Icon name="sticky note outline" size="big" color="grey" />
            &nbsp;作业：较多
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell style={{ borderTop: '0px' }}>
            <Icon name="bar chart" size="big" color="grey" />
            &nbsp;考试：费劲
          </Table.Cell>
          <Table.Cell style={{ borderTop: '0px' }}>
            <Icon name="bath" size="big" color="grey" />
            &nbsp;水分：不水
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Segment>
)

export default SegmentCourseMain
