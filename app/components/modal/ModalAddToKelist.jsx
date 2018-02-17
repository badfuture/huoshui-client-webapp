import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button, Header, Icon, Modal, Container,
  Checkbox, Form, Input, Label, Dropdown, TextArea, Divider, List,
} from 'semantic-ui-react'
import axios from 'axios'
import { URL_USER, URL_KELIST } from '../../constants/ApiEndpoints'
import * as authActions from '../../actions/authActions'
import { success, info, error } from 'react-notification-system-redux'
import Messages from '../../constants/NotificationMessages'

class ModalAddToKelist extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isCreatingKelist: false,
      isFetchingKelists: false,
      selectedKelist: null,
      newKelistName: '',
      briefComment: '',
    }
  }

  componentDidMount() {
    // this.props.getLatestUserInfo()
  }

  createKelist = () => {
    axios.post(URL_KELIST, {
      name: this.state.newKelistName,
      isPublic: false,
    })
    .then(() => {
      this.props.getLatestUserInfo()
    })
  }

  addToKelist = () => {
    const { selectedKelist, briefComment } = this.state
    if (!selectedKelist) {
      return
    }
    const selectedKelistId = selectedKelist.id
    axios.post(`${URL_KELIST}/${selectedKelistId}`, {
      courseId: this.props.course.id,
      briefComment,
    })
    .then(() => {
      this.props.promptAddSuccess()
      this.props.close()
    })
  }

  selectKelist = (kelist) => {
    this.setState({ selectedKelist: kelist })
  }

  onInput = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  render() {
    const { isCreatingKelist, selectedKelist } = this.state
    const { trigger, user } = this.props

    let kelists = []
    if (user && user.OwnsKelists) {
      kelists = user.OwnsKelists
    }

    let buttonEnabled = false
    if (selectedKelist) {
      buttonEnabled = true
    }

    return (
      <Modal
        size="mini"
        closeIcon="close"
        open={this.props.open}
        closeOnDimmerClick={false}
        onClose={this.props.close}
      >
        <Header as="h3">
          <Header.Content>
            添加到课列
            <Header.Subheader style={{ marginTop: '0.25em' }}>
              {
                (this.props.course && this.props.course.Prof) &&
                `${this.props.course.name} - ${this.props.course.Prof.name}`
              }
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Modal.Content>
          <div >
            <span>
              <Header as="h5" disabled style={{ display: 'inline-block' }}>
                选择课列
              </Header>
              {
                !isCreatingKelist &&
                <Button
                  style={{ marginLeft: '1em' }}
                  content="创建课列"
                  size="mini" basic color="blue" compact
                  onClick={() => { this.setState({ isCreatingKelist: true }) }}
                />
              }
              {
                isCreatingKelist &&
                <Button
                  style={{ marginLeft: '1em' }}
                  content="取消创建"
                  size="mini" basic color="blue" compact
                  onClick={() => { this.setState({ isCreatingKelist: false }) }}
                />
              }
            </span>
            {
              isCreatingKelist &&
              <Input
                fluid
                action={
                  <Button
                    content="创建"
                    onClick={() => {
                      this.createKelist()
                      this.setState({ isCreatingKelist: false })
                    }}
                  />
                }
                name="newKelistName"
                placeholder="输入新课列名称" maxLength={15}
                value={this.state.newKelistName}
                onChange={this.onInput}
              />
            }


            <div style={{ marginTop: '0.75em', height: '10em' }}>
              <List
                selection
                style={{ overflowY: 'scroll', height: '100%' }}
              >
                {
                  kelists.map(kelist => (

                    <List.Item
                      key={kelist.id}
                      active={selectedKelist && selectedKelist.id == kelist.id}
                      onClick={() => {
                        this.selectKelist(kelist)
                      }}
                    >
                      {kelist.name}
                    </List.Item>
                  ))
                }
              </List>
            </div>

          </div>


          <Header as="h5" disabled>
            推荐语（选填）
          </Header>
          <Form>
            <TextArea
              maxLength="150"
              rows={2}
              autoHeight
              placeholder="添加课程的理由"
              name="briefComment"
              value={this.state.briefComment}
              onChange={this.onInput}
            />
          </Form>

        </Modal.Content>
        <Modal.Actions>
          <Button color="grey" onClick={this.props.close}>
            <Icon name="remove" /> 取消
          </Button>
          <Button
            color="blue"
            disabled={!buttonEnabled}
            onClick={this.addToKelist}
          >
            <Icon name="checkmark" /> 保存
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

// map redux states to prop
const mapStateToProps = state => ({
  user: state.auth.user,
})

// map redux actions to prop
const mapActionToProps = dispatch => ({
  getLatestUserInfo: () => dispatch(authActions.getLatestUserInfo()),
  promptAddSuccess: () => dispatch(info(Messages.addToKelistSuccess)),
})

export default connect(mapStateToProps, mapActionToProps)(ModalAddToKelist)
