import React from 'react'
import { Header, Label, Table, Popup, Icon } from 'semantic-ui-react'
import {
  getAttendText,
  getHomeworkText,
  getBirdText,
  getExamText,
} from '../../utils/StatUtil'

const getExamIcon = (val) => {
  if (val == true) {
    return <Icon name="checkmark" color="green" />
  } else if (val == false) {
    return <Icon name="remove" color="red" />
  }
  return <Icon name="question" color="grey" />
}

const ExamPopup = props => (
  <Popup
    trigger={<Label ribbon="right">详情</Label>}
    position="bottom center"
  >
    <Popup.Header>考试体验</Popup.Header>
    <Popup.Content>
      <Table basic="very" celled collapsing>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h5">
                划重点
              </Header>
            </Table.Cell>
            <Table.Cell>
              {getExamIcon(props.examprep)}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h5">
                开卷
              </Header>
            </Table.Cell>
            <Table.Cell>
              {getExamIcon(props.openbook)}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h5">
                原题多
              </Header>
            </Table.Cell>
            <Table.Cell>
              {getExamIcon(props.oldquestion)}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h5">
                给分松
              </Header>
            </Table.Cell>
            <Table.Cell>
              {getExamIcon(props.easymark)}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Popup.Content>
  </Popup>
)

const TableSecondaryStat = props => (
  <Table celled columns={4}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>点名</Table.HeaderCell>
        <Table.HeaderCell>作业</Table.HeaderCell>
        <Table.HeaderCell>水分</Table.HeaderCell>
        <Table.HeaderCell>
          {
            props.hasExam &&
              <ExamPopup
                examprep={props.examprep}
                openbook={props.openbook}
                oldquestion={props.oldquestion}
                easymark={props.easymark}
              />
          }
          考试
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>{getAttendText(props.rateAttend)}</Table.Cell>
        <Table.Cell>{getHomeworkText(props.rateHomework)}</Table.Cell>
        <Table.Cell>{getBirdText(props.rateBirdy)}</Table.Cell>
        <Table.Cell>{getExamText(props.rateExam)}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)
export default TableSecondaryStat
