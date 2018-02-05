/*
Specification

评价对象
  教师选择 + 课程
总体评价
  三个核心数据
短评
  600 words max
标签
  最多三个标签
课程体验
  水课：未知-毫无水分-较少水分-普通水平-水分较大-水到不行
  点名：未知-不点-很少-适量-经常-必点
  作业：未知-没有-很少-适量-较多-巨多
  考试：未知-轻松-较易-中等-较难-艰难
考试体验
  划重点
  开卷
  原题
  给分松紧
 */


import React, { Component } from 'react'
import axios from 'axios'
import { Grid, Button, Header, Icon, Modal, TextArea, Form, Rating, Dropdown, Divider } from 'semantic-ui-react'
import SearchCourseContainer from '../../containers/search/SearchCourseContainer'
import reviewOptions from '../../data/review_options'
import { URL_REVIEW, URL_TAG } from '../../constants/ApiEndpoints'

const optionsBird = reviewOptions.bird
const optionsAttend = reviewOptions.attend
const optionsHomework = reviewOptions.homework
const optionsExam = reviewOptions.exam
const optionsExamExtra = reviewOptions.examExtra

class OptionalFields extends Component {
  render() {
    return (<div>
      <Header as="h4">标签 (最多选3个)</Header>
      <Dropdown
        placeholder="（选择标签）" fluid multiple selection
        options={this.props.tagOptions}
        onOpen={this.props.getTagOptions}
        loading={this.props.isFetchingTagsOptions}
        onChange={this.props.handleTagChange}
        value={this.props.tagsChosen}
      />
      <Header as="h4">课程体验</Header>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={8} style={{ paddingRight: '3.5rem' }}>
            <Button.Group color="blue">
              <Button >水课鉴定</Button>
              <Dropdown
                name="rateBirdy"
                onChange={this.props.handleInputChange}
                options={optionsBird}
                value={this.props.rateBirdy}
                floating button className="icon"
              />
            </Button.Group><br /><br />
            <Button.Group color="blue">
              <Button >点名频率</Button>
              <Dropdown
                name="rateAttend"
                onChange={this.props.handleInputChange}
                options={optionsAttend}
                value={this.props.rateAttend}
                floating button className="icon"
              />
            </Button.Group><br /><br />
          </Grid.Column>
          <Grid.Column width={8} style={{ paddingLeft: '1.0rem' }}>
            <Button.Group color="blue">
              <Button >作业多少</Button>
              <Dropdown
                name="rateHomework"
                onChange={this.props.handleInputChange}
                options={optionsHomework}
                value={this.props.rateHomework}
                floating button className="icon"
              />
            </Button.Group><br /><br />
            <Button.Group color="blue">
              <Button >考试难度</Button>
              <Dropdown
                name="rateExam"
                onChange={this.props.handleInputChange}
                options={optionsExam}
                value={this.props.rateExam}
                floating button className="icon"
              />
            </Button.Group><br /><br />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      { this.props.hasExam && <div>
        <Header as="h4">考试体验</Header>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={8} style={{ paddingRight: '3.5rem' }}>
              <Button.Group color="blue">
                <Button >开卷</Button>
                <Dropdown
                  name="openbook"
                  onChange={this.props.handleInputChange}
                  options={optionsExamExtra}
                  value={this.props.openbook}
                  floating button className="icon"
                />
              </Button.Group><br /><br />
              <Button.Group color="blue">
                <Button >划重点</Button>
                <Dropdown
                  name="examprep"
                  onChange={this.props.handleInputChange}
                  options={optionsExamExtra}
                  value={this.props.examprep}
                  floating button className="icon"
                />
              </Button.Group><br /><br />
            </Grid.Column>
            <Grid.Column width={8} style={{ paddingLeft: '1.0rem' }}>
              <Button.Group color="blue">
                <Button >原题多</Button>
                <Dropdown
                  name="oldquestion"
                  onChange={this.props.handleInputChange}
                  options={optionsExamExtra}
                  value={this.props.oldquestion}
                  floating button className="icon"
                />
              </Button.Group><br /><br />
              <Button.Group color="blue">
                <Button >给分松</Button>
                <Dropdown
                  name="easymark"
                  onChange={this.props.handleInputChange}
                  options={optionsExamExtra}
                  value={this.props.easymark}
                  floating button className="icon"
                />
              </Button.Group><br /><br />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>}

    </div>)
  }
}

const initialState = {
  // review target
  profName: null,
  courseName: null,

  // input fields
  professional: 3,
  expressive: 3,
  kind: 3,
  avg: 3.0,
  classification: '中评',
  text: '',

  // optional tags
  tagOptions: [],
  tagsChosen: [],
  isFetchingTagsOptions: false,

  // other optional fields
  rateBirdy: 0,
  rateAttend: 0,
  rateHomework: 0,
  rateExam: 0,

  hasExam: false,
  examprep: 0,
  openbook: 0,
  oldquestion: 0,
  easymark: 0,

  // meta state
  optionalFieldsVisible: false,
}

class ModalAddReview extends Component {

  constructor() {
    super()
    this.state = initialState

    this.enableOptionalFields = this.enableOptionalFields.bind(this)
    this.disableOptionalFields = this.disableOptionalFields.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onInput = this.onInput.bind(this)
    this.onRate = this.onRate.bind(this)
    this.reset = this.reset.bind(this)
  }

  reset() {
    this.setState(initialState)
    this.props.resetSearchCourse()
    this.SearchCourseContainer.getWrappedInstance().reset()
  }

  // handle tag change
  handleTagChange(e, { value }) {
    if (value.length > 3) {
      return
    }
    this.setState({ tagsChosen: value })
  }
  getTagOptions() {
    if (this.state.tagOptions.length !== 0) {
      return
    }
    this.setState({ isFetchingTagsOptions: true })
    axios.get(`${URL_TAG}`)
    .then((res) => {
      const tagOptions = res.data.map(tag => ({
        key: tag.id,
        text: tag.name,
        value: tag.id,
      }))
      this.setState({
        tagOptions,
        isFetchingTagsOptions: false,
      })
    })
  }

  getReviewClassification(total) {
    if (total <= 7) {
      return '差评'
    } else if (total >= 11) {
      return '好评'
    } else if (total > 7 && total < 11) {
      return '中评'
    }
    return '未知'
  }

  validate() {
    if (!this.props.courseId || !this.state.text) {
      return false
    }
    return true
  }

  onInput = (e, { name, value }) => {
    if (name === 'rateExam' && value >= 1) {
      this.setState({ hasExam: true })
    } else if (name === 'rateExam' && value === 0) {
      this.setState({ hasExam: false })
    }
    this.setState({ [name]: value })
  }


  onRate = (e, { name, rating }) => {
    this.setState({ [name]: rating })

    // update core stat average
    const currVal = this.state[name]
    let avg = this.state.avg
    avg += (rating - currVal) / 3
    this.setState({ avg })

    // update core stat classification
    const classification = this.getReviewClassification(avg * 3)
    this.setState({ classification })
  }

  onSubmit() {
    if (!this.validate()) {
      return false
    }
    let {
      optionalFieldsVisible,
      professional, expressive, kind, text,
      tagsChosen,
      rateBirdy, rateAttend, rateHomework, rateExam,
      hasExam, examprep, openbook, oldquestion, easymark,
    } = this.state

    // reset redundent values if not enabled
    if (!optionalFieldsVisible) {
      tagsChosen = []
      rateBirdy = rateAttend = rateHomework = rateExam = null
      examprep = openbook = oldquestion = easymark = null
    } else if (optionalFieldsVisible && !hasExam) {
      examprep = openbook = oldquestion = easymark = null
    } else if (optionalFieldsVisible && hasExam) {
      // map option values to boolean to be parsed by backend
      if (examprep === 1) {
        examprep = true
      } else if (examprep === 2) {
        examprep = false
      }
      if (openbook === 1) {
        openbook = true
      } else if (openbook === 2) {
        openbook = false
      }
      if (oldquestion === 1) {
        oldquestion = true
      } else if (oldquestion === 2) {
        oldquestion = false
      }
      if (easymark === 1) {
        easymark = true
      } else if (easymark === 2) {
        easymark = false
      }
    }

    const payload = {
      courseId: this.props.courseId,
      professional,
      expressive,
      kind,
      text,
      tags: tagsChosen,
      rateBirdy,
      rateAttend,
      rateHomework,
      rateExam,
      examprep,
      openbook,
      oldquestion,
      easymark,
    }
    axios.post(`${URL_REVIEW}`, payload)
    .then((res) => {
      // show success modal
      this.props.promptReviewSuccess()
      setTimeout(() => {
        window.location.reload()
      }, 3000)
      this.reset()
      this.props.onClose()
    })
    .catch((err) => {
      // submit failed show dialog
      if (err) {
        this.props.onClose()
        const errData = err.response.data
        const errCode = errData.error.code
        if (errCode == 'ReviewSameCourseTwice') {
          this.props.onClose()
          this.props.promptReviewTwice()
        }
      }
    })
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
          { this.props.searchVisible &&
            <div>
              <Header as="h4">评价对象</Header>
              <SearchCourseContainer
                ref={(comp) => { this.SearchCourseContainer = comp }}
              />
            </div>
          }
          <Header as="h4">总体评价 （{this.state.avg.toFixed(1)} / 5.0分 {this.state.classification}）</Header>
          <Grid divided="vertically" style={{ padding: '0 0.5em' }}>
            <Grid.Row columns={2}>
              <Grid.Column width={8}>

                <div style={{ marginBottom: '0.2em' }}>
                  <span>专业：</span>
                  <span>
                    <Rating
                      name="professional"
                      onRate={this.onRate}
                      rating={this.state.professional}
                      maxRating={5} icon="star" size="huge"
                    />
                  </span>
                </div>

                <div style={{ marginBottom: '0.2em' }}>
                  <span>表达：</span>
                  <Rating
                    name="expressive"
                    onRate={this.onRate}
                    rating={this.state.expressive}
                    maxRating={5} icon="star" size="huge"
                  />
                </div>

                <div style={{ marginBottom: '0.2em' }}>
                  <span>友善：</span>
                  <Rating
                    name="kind"
                    onRate={this.onRate}
                    rating={this.state.kind}
                    maxRating={5} icon="star" size="huge"
                  />
                </div>
              </Grid.Column>
              <Grid.Column textAlign="center" width={8} />
            </Grid.Row>
          </Grid>


          <Header as="h4">短评</Header>
          <Form>
            <TextArea
              maxLength="450"
              rows={7}
              autoHeight
              placeholder="你对课程和老师的看法："
              name="text"
              value={this.state.text}
              onChange={this.onInput}
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
          { optionalFieldsVisible &&
            <OptionalFields
              {...this.state}
              handleInputChange={this.onInput}
              handleTagChange={this.handleTagChange.bind(this)}
              getTagOptions={this.getTagOptions.bind(this)}
            />
          }

        </Modal.Content>
        <Modal.Actions style={{ textAlign: 'center' }}>
          <Button
            color="grey"
            onClick={this.props.onClose}
          >
            <Icon name="remove" /> 关闭
          </Button>
          <Button
            onClick={this.reset.bind(this)}
          >
            <Icon name="repeat" /> 清空
          </Button>
          <Button
            color="blue"
            onClick={this.onSubmit}
          >
            <Icon name="checkmark" /> 提交
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}


export default ModalAddReview
