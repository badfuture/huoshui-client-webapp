import React from 'react'
import { Header, Icon, Segment, Table, Popup, Label } from 'semantic-ui-react'
import {
  getAttendText,
  getHomeworkText,
  getBirdText,
  getExamText,
} from '../../utils/StatUtil'

const SegmentCourseMain = props => (
  <Segment attached>
    <Header as="h3">
      课程：{props.name}
    </Header>

    <Table basic="very" columns={2} >
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Icon name="calendar check" size="big" color="blue" />
            &nbsp;点名：{props.Stat && getAttendText(props.Stat.meanAttend)}
          </Table.Cell>
          <Table.Cell>
            <Icon name="file text outline" size="big" color="blue" />
            &nbsp;作业：{props.Stat && getHomeworkText(props.Stat.meanHomework)}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell style={{ borderTop: '0px' }}>
            <Icon name="bath" size="big" color="blue" />
            &nbsp;水分：{props.Stat && getBirdText(props.Stat.meanBirdy)}
          </Table.Cell>
          <Table.Cell style={{ borderTop: '0px' }}>
            <Icon name="bar chart" size="big" color="blue" />
            &nbsp;考试：{props.Stat && getExamText(props.Stat.meanExam)}&nbsp;&nbsp;&nbsp;
            <Popup
              trigger={<Label color="blue" basic >详情</Label>}
              position="bottom center"
            >
              <Popup.Header>考试体验</Popup.Header>
              <Popup.Content>
                sdd
              </Popup.Content>
            </Popup>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Segment>
)

export default SegmentCourseMain
