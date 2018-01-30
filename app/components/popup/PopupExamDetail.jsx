import React, { Component } from 'react'
import { Header, Icon, Segment, Table, Popup, Label, Progress, Grid } from 'semantic-ui-react'

export default class PopupExamDetail extends Component {
  constructor() {
    super()
    this.state = { percent: 100 }
  }

  componentDidMount() {

  }

  handleChange(value) {
    this.setState({ text: value })
  }

  render() {
    const {
      countExamPrepYes,
      countExamPrepNo,
      countExamOpenbookYes,
      countExamOpenbookNo,
      countExamOldquestionYes,
      countExamOldquestionNo,
      countExamEasymarkYes,
      countExamEasymarkNo,
    } = this.props.Stat
    return (
      <Popup
        trigger={<Label color="blue" basic >详情</Label>}
        position="bottom center"
        wide
      >
        <Popup.Header>考试体验</Popup.Header>
        <Popup.Content>
          <Table basic="very" compact="very" collapsing verticalAlign="middle">
            <Table.Body>
              <Table.Row>
                <Table.Cell collapsing>
                  <Header as="h5">
                    划重点
                  </Header>
                </Table.Cell>
                <Table.Cell width={13} >
                  <Progress
                    progress="ratio"
                    value={countExamPrepYes}
                    total={countExamPrepYes + countExamPrepNo}
                    style={{ margin: '0.25em' }}
                    indicating
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as="h5">
                    开卷
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <Progress
                    progress="ratio"
                    value={countExamOpenbookYes}
                    total={countExamOpenbookYes + countExamOpenbookNo}
                    style={{ margin: '0.25em' }}
                    indicating
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as="h5">
                    原题多
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <Progress
                    progress="ratio"
                    value={countExamOldquestionYes}
                    total={countExamOldquestionYes + countExamOldquestionNo}
                    style={{ margin: '0.25em' }}
                    indicating
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as="h5">
                    给分松
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <Progress
                    progress="ratio"
                    value={countExamEasymarkYes}
                    total={countExamEasymarkYes + countExamEasymarkNo}
                    style={{ margin: '0.25em' }}
                    indicating
                  />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

        </Popup.Content>
      </Popup>
    )
  }
}
