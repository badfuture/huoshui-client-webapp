import React, { Component } from 'react'
import { Grid, Button, Header, Icon, Modal, TextArea, Form, Rating, Dropdown, Divider } from 'semantic-ui-react'
import SearchCourseContainer from '../../containers/search/SearchCourseContainer'

const options = [
  { key: '不水', text: '不水', value: '不水' },
  { key: '较水', text: '较水', value: '较水' },
  { key: '正常', text: '正常', value: '正常' },
]

/*
水课：未知-毫无水分-较少水分-普通水平-水分较大-水到不行
点名：未知-不点-很少-适量-经常-必点
作业：未知-没有-很少-适量-较多-巨多
考试：未知-轻松-较易-中等-较难-艰难
*/
const optionsBird = [
  { key: '未知', text: '未知', value: '0' },
  { key: '毫无水分', text: '毫无水分', value: '1' },
  { key: '较少水分', text: '较少水分', value: '2' },
  { key: '普通水平', text: '普通水平', value: '3' },
  { key: '水分较大', text: '水分较大', value: '4' },
  { key: '水到不行', text: '水到不行', value: '5' },
]

const optionsAttend = [
  { key: '未知', text: '未知', value: '0' },
  { key: '不点', text: '不点', value: '1' },
  { key: '很少', text: '很少', value: '2' },
  { key: '适量', text: '适量', value: '3' },
  { key: '经常', text: '经常', value: '4' },
  { key: '必点', text: '必点', value: '5' },
]

const optionsHomework = [
  { key: '未知', text: '未知', value: '0' },
  { key: '没有', text: '没有', value: '1' },
  { key: '很少', text: '很少', value: '2' },
  { key: '适量', text: '适量', value: '3' },
  { key: '较多', text: '较多', value: '4' },
  { key: '巨多', text: '巨多', value: '5' },
]

const optionsExam = [
  { key: '未知', text: '未知', value: '0' },
  { key: '轻松', text: '轻松', value: '1' },
  { key: '较易', text: '较易', value: '2' },
  { key: '中等', text: '中等', value: '3' },
  { key: '较难', text: '较难', value: '4' },
  { key: '艰难', text: '艰难', value: '5' },
]

const optionsExamExtra = [
  { key: '未知', text: '未知', value: '0' },
  { key: '是', text: '是', value: '1' },
  { key: '否', text: '否', value: '2' },
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
            <Dropdown options={optionsBird} defaultValue={'0'} floating button className="icon" />
          </Button.Group><br /><br />
          <Button.Group color="blue">
            <Button >点名频率</Button>
            <Dropdown options={optionsAttend} defaultValue={'0'} floating button className="icon" />
          </Button.Group><br /><br />
        </Grid.Column>
        <Grid.Column width={8} style={{ paddingLeft: '1.0rem' }}>
          <Button.Group color="blue">
            <Button >作业多少</Button>
            <Dropdown options={optionsHomework} defaultValue={'0'} floating button className="icon" />
          </Button.Group><br /><br />
          <Button.Group color="blue">
            <Button >考试难度</Button>
            <Dropdown options={optionsExam} defaultValue={'0'} floating button className="icon" />
          </Button.Group><br /><br />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Header as="h4">考试体验</Header>
    <Grid stackable>
      <Grid.Row>
        <Grid.Column width={8} style={{ paddingRight: '3.5rem' }}>
          <Button.Group color="blue">
            <Button >开卷</Button>
            <Dropdown options={optionsExamExtra} defaultValue={'0'} floating button className="icon" />
          </Button.Group><br /><br />
          <Button.Group color="blue">
            <Button >划重点</Button>
            <Dropdown options={optionsExamExtra} defaultValue={'0'} floating button className="icon" />
          </Button.Group><br /><br />
        </Grid.Column>
        <Grid.Column width={8} style={{ paddingLeft: '1.0rem' }}>
          <Button.Group color="blue">
            <Button >原题多</Button>
            <Dropdown options={optionsExamExtra} defaultValue={'0'} floating button className="icon" />
          </Button.Group><br /><br />
          <Button.Group color="blue">
            <Button >给分松</Button>
            <Dropdown options={optionsExamExtra} defaultValue={'0'} floating button className="icon" />
          </Button.Group><br /><br />
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
