import React, { Component } from 'react'
import { Grid, Button, Header, Icon, Modal, TextArea, Form, Rating, Dropdown, Divider, Checkbox } from 'semantic-ui-react'
import SearchCourseContainer from '../../containers/search/SearchCourseContainer'

const options = [
  { key: '不水', text: '不水', value: '不水' },
  { key: '较水', text: '较水', value: '较水' },
  { key: '正常', text: '正常', value: '正常' },
]
const optionsBird = [
  { key: '不水', text: '不水', value: '不水' },
  { key: '较水', text: '较水', value: '较水' },
  { key: '正常', text: '正常', value: '正常' },
  { key: '较高', text: '较高', value: '较高' },
  { key: '超级水', text: '超级水', value: '超级水' },
]

const optionsAttend = [
  { key: '不点', text: '不点', value: '不点' },
  { key: '偶尔', text: '偶尔', value: '偶尔' },
  { key: '正常', text: '正常', value: '正常' },
  { key: '频繁', text: '频繁', value: '频繁' },
  { key: '点名狂', text: '点名狂', value: '点名狂' },
]

const optionsHomework = [
  { key: '没有', text: '没有', value: '没有' },
  { key: '较少', text: '较少', value: '较少' },
  { key: '正常', text: '正常', value: '正常' },
  { key: '较多', text: '较多', value: '较多' },
  { key: '堆成山', text: '堆成山', value: '堆成山' },
]

const optionsExam = [
  { key: '没有', text: '没有', value: '没有' },
  { key: '容易', text: '容易', value: '容易' },
  { key: '正常', text: '正常', value: '正常' },
  { key: '较难', text: '较难', value: '较难' },
  { key: '费劲', text: '费劲', value: '费劲' },
]

const OptionalFields = () => (
  <div>
    <Header as="h4">标签</Header>
    <Dropdown placeholder="（选择标签）" fluid multiple selection options={options} />
    <Header as="h4">课程体验</Header>
    <Grid stackable>
      <Grid.Row>
        <Grid.Column width={8} style={{ paddingRight: '3.5rem' }}>
          <Button.Group color="blue">
            <Button >水课鉴定</Button>
            <Dropdown options={optionsBird} floating button className="icon" />
          </Button.Group><br /><br />
          <Button.Group color="blue">
            <Button >点名频率</Button>
            <Dropdown options={optionsAttend} floating button className="icon" />
          </Button.Group><br /><br />
        </Grid.Column>
        <Grid.Column width={8} style={{ paddingLeft: '1.0rem' }}>
          <Button.Group color="blue">
            <Button >作业多少</Button>
            <Dropdown options={optionsHomework} floating button className="icon" />
          </Button.Group><br /><br />
          <Button.Group color="blue">
            <Button >考试难度</Button>
            <Dropdown options={optionsExam} floating button className="icon" />
          </Button.Group><br /><br />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Header as="h4">考试体验</Header>
    <Grid stackable>
      <Grid.Row>
        <Grid.Column width={8} style={{ paddingRight: '3.5rem' }}>
          <Checkbox toggle label="划重点" /><br /><br />
          <Checkbox toggle label="开卷" /><br /><br />
        </Grid.Column>
        <Grid.Column width={8} style={{ paddingLeft: '1.0rem' }}>
          <Checkbox toggle label="原题" /><br /><br />
          <Checkbox toggle label="给分松" /><br /><br />
        </Grid.Column>
      </Grid.Row>
    </Grid>

  </div>
)


class ModalAddReview extends Component {

  constructor() {
    super()
    this.enableOptionalFields = this.enableOptionalFields.bind(this)
    this.disableOptionalFields = this.disableOptionalFields.bind(this)
  }

  state = {
    optionalFieldsVisible: false,
  }

  enableOptionalFields() {
    this.setState({ optionalFieldsVisible: true })
    window.scrollTo(0, document.body.scrollHeight)
  }

  disableOptionalFields() {
    this.setState({ optionalFieldsVisible: false })
  }

  render() {
    const { optionalFieldsVisible } = this.state
    return (
      <Modal
        closeIcon="close"
        onClose={this.props.onClose}
        open={this.props.visible}
        size="tiny"
        closeOnDimmerClick={false}
      >
        <Header icon={<Icon color="blue" name="theme" />} content="你说了算" />
        <Modal.Content>
          <Header as="h4">评价对象</Header>
          <SearchCourseContainer />
          <Header as="h4">总体评价</Header>
          专业：<Rating maxRating={5} defaultRating={3} icon="star" size="huge" /><br />
          表达：<Rating maxRating={5} defaultRating={3} icon="star" size="huge" /><br />
          友善：<Rating maxRating={5} defaultRating={3} icon="star" size="huge" /><br />
          <Header as="h4">短评</Header>
          <Form>
            <TextArea
              maxLength="600"
              rows={7}
              autoHeight
              placeholder="你对课程和老师的看法："
            />
          </Form>
          {!optionalFieldsVisible &&
            <Divider horizontal section >
              <div
                onClick={this.enableOptionalFields}
                role="button"
              >
                点击启用选填项 <br />
                <Icon
                  style={{ fontSize: '2em' }}
                  name="angle double down"
                  color="blue"
                />
              </div>
            </Divider>
          }
          {optionalFieldsVisible &&
            <Divider horizontal section >
              <div
                role="button"
                onClick={this.disableOptionalFields}
              >
                点击禁用选填项 <br />
                <Icon
                  style={{ fontSize: '2em' }}
                  name="angle double up"
                  color="blue"
                />
              </div>
            </Divider>
          }
          {optionalFieldsVisible && <OptionalFields /> }

        </Modal.Content>
        <Modal.Actions>
          <Button color="grey">
            <Icon name="remove" /> 清空
          </Button>
          <Button color="blue">
            <Icon name="checkmark" /> 提交
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}


export default ModalAddReview


/*
Specification

评价对象
  教师选择
  课程
总体评价
  three core stats
短评
  600 words max
    TODO: allow formatting
Tags
  max three tags
课程体验
  水分: 不水, 较水，正常, 较高，超级水
  点名: 不点，偶尔，正常，频繁，点名狂
  作业: 没有，较少，正常，较多，堆成山
  考试: 没有，容易，正常，较难，费劲
考试体验
  划重点
  开卷
  原题
  给分松紧
 */
