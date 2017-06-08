import React from 'react'
import { Header, Icon, Segment, Table } from 'semantic-ui-react'

/*
Category Classification
field：(0,1], (1,2],(2,3] ,(3,4] ,(4,5]
水分: 不水, 较水，正常, 较高，超级水
点名: 不点，偶尔，正常，频繁，点名狂
作业: 没有，较少，正常，较多，堆成山
考试: 没有，容易，正常，较难，费劲
 */

const BirdText = (props) => {
  const val = props.birdy
  const count = props.countBird
  let text = '未知'
  if (count === 0) {
    text = '未知'
  } else if (val > 0 && val <= 1) {
    text = '不水'
  } else if (val > 1 && val <= 2) {
    text = '较水'
  } else if (val > 2 && val <= 3) {
    text = '正常'
  } else if (val > 3 && val <= 4) {
    text = '较高'
  } else if (val > 4 && val <= 5) {
    text = '超级水'
  }
  return <span>{text}</span>
}

const HomeworkText = (props) => {
  const val = props.lotsHomework
  const count = props.countHomework
  let text = '未知'
  if (count === 0) {
    text = '未知'
  } else if (val > 0 && val <= 1) {
    text = '没有'
  } else if (val > 1 && val <= 2) {
    text = '较少'
  } else if (val > 2 && val <= 3) {
    text = '正常'
  } else if (val > 3 && val <= 4) {
    text = '较多'
  } else if (val > 4 && val <= 5) {
    text = '堆成山'
  }
  return <span>{text}</span>
}

const AttendText = (props) => {
  const val = props.lotsHomework
  const count = props.countHomework
  let text = '未知'
  if (count === 0) {
    text = '未知'
  } else if (val > 0 && val <= 1) {
    text = '不点'
  } else if (val > 1 && val <= 2) {
    text = '偶尔'
  } else if (val > 2 && val <= 3) {
    text = '正常'
  } else if (val > 3 && val <= 4) {
    text = '频繁'
  } else if (val > 4 && val <= 5) {
    text = '点名狂'
  }
  return <span>{text}</span>
}

const ExamText = (props) => {
  const val = props.lotsHomework
  const count = props.countHomework
  let text = '未知'
  if (count === 0) {
    text = '未知'
  } else if (val > 0 && val <= 1) {
    text = '没有'
  } else if (val > 1 && val <= 2) {
    text = '容易'
  } else if (val > 2 && val <= 3) {
    text = '正常'
  } else if (val > 3 && val <= 4) {
    text = '较难'
  } else if (val > 4 && val <= 5) {
    text = '费劲'
  }
  return <span>{text}</span>
}

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
            &nbsp;点名：<AttendText {...props.Stat} />
          </Table.Cell>
          <Table.Cell>
            <Icon name="sticky note outline" size="big" color="grey" />
            &nbsp;作业：<HomeworkText {...props.Stat} />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell style={{ borderTop: '0px' }}>
            <Icon name="bar chart" size="big" color="grey" />
            &nbsp;考试：<ExamText {...props.Stat} />
          </Table.Cell>
          <Table.Cell style={{ borderTop: '0px' }}>
            <Icon name="bath" size="big" color="grey" />
            &nbsp;水分：<BirdText {...props.Stat} />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Segment>
)

export default SegmentCourseMain
