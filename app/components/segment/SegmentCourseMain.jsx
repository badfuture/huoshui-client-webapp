import React from 'react'
import { Header, Icon, Segment, Table } from 'semantic-ui-react'

/*
Category Classification
field：(0,1],(1,2],(2,3],(3,4],(4,5]
水课：未知-毫无水分-较少水分-普通水平-水分较大-水到不行
点名：未知-不点-很少-适量-经常-必点
作业：未知-没有-很少-适量-较多-巨多
考试：未知-轻松-较易-中等-较难-艰难
 */

const BirdText = (props) => {
  const val = props.meanBirdy
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
  const val = props.meanHomework
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
  const val = props.meanAttend
  const count = props.countAttend
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
  const val = props.meanExam
  const count = props.countExam
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
  <Segment attached>
    <Header as="h3">
      课程：{props.name}
    </Header>

    <Table basic="very" >
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Icon name="calendar check" size="big" color="blue" />
            &nbsp;点名：<AttendText {...props.Stat} />
          </Table.Cell>
          <Table.Cell>
            <Icon name="file text outline" size="big" color="blue" />
            &nbsp;作业：<HomeworkText {...props.Stat} />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell style={{ borderTop: '0px' }}>
            <Icon name="bar chart" size="big" color="blue" />
            &nbsp;考试：<ExamText {...props.Stat} />
          </Table.Cell>
          <Table.Cell style={{ borderTop: '0px' }}>
            <Icon name="bath" size="big" color="blue" />
            &nbsp;水分：<BirdText {...props.Stat} />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Segment>
)

export default SegmentCourseMain
