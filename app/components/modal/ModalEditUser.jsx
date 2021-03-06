import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Header, Icon, Modal, Checkbox, Form, Input, Label, Dropdown } from 'semantic-ui-react'
import axios from 'axios'
import profileOptions from '../../data/user_profile_options'
import { URL_DEPT, URL_SINGLE_USER } from '../../constants/ApiEndpoints'

const initialState = {
  // dept options
  isFetchingDepts: false,

  // meta state
  showWarning: false,
}

class ModalEditUser extends Component {

  constructor(props) {
    super(props)

    this.state = initialState
  }

  componentDidMount() {
    this.getDeptOptions()
  }

  reset = () => {
    this.setState(initialState)
  }

  submit = () => {
    const { username, email, firstYear, deptId, schoolId } = this.state
    axios.patch(URL_SINGLE_USER, {
      username, email, firstYear, deptId, schoolId,
    })
    .then(() => {
      window.location.reload()
    })
  }

  onClose = () => {
    this.reset()
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  getDeptOptions = () => {
    if (this.state.deptOptions && this.state.deptOptions.length !== 0) {
      return
    }
    this.setState({ isFetchingDepts: true })
    axios.get(`${URL_DEPT}`)
    .then((res) => {
      const deptOptions = res.data.map(dept => ({
        key: dept.id,
        text: `${dept.shortname} (${dept.longname})`,
        value: dept.id,
      }))
      this.setState({
        deptOptions,
        isFetchingDepts: false,
      })
    })
  }


  render() {
    const {
      username = this.props.user.username,
      email = this.props.user.email,
      schoolId = this.props.user.school_id,
      deptId = this.props.user.dept_id,
      deptOptions = [],
      firstYear = this.props.user.firstYear,
    } = this.state
    const { trigger } = this.props

    return (
      <Modal
        size="mini"
        trigger={trigger}
        closeIcon="close"
        closeOnDimmerClick={false}
        onClose={this.onClose}
      >
        <Header icon="user outline" content="修改用户信息" />
        <Modal.Content>
          <Form
            loading={false}
            onSubmit={this.handleSubmit}
          >
            <Header size="small" content="基本信息" disabled />
            <Form.Field>
              <Form.Input icon="user outline" name="username" value={username} iconPosition="left" placeholder="昵称" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <Input icon="mail outline" name="email" value={email} iconPosition="left" placeholder="邮箱" onChange={this.handleChange} />
            </Form.Field>

            <Header size="small" content="教育档案" disabled />
            <Form.Field>
              <Form.Dropdown
                placeholder="学校" fluid selection
                options={profileOptions.school}
                value={1}
              />
            </Form.Field>
            <Form.Field>
              <Form.Dropdown
                placeholder="学院" fluid selection
                options={deptOptions}
                onOpen={this.getDeptOptions}
                loading={this.state.isFetchingDepts}
                onChange={this.handleChange}
                name="deptId"
                value={deptId}
              />
            </Form.Field>
            <Form.Field>
              <Form.Dropdown
                fluid selection options={profileOptions.year} placeholder="年级"
                name="firstYear"
                onChange={this.handleChange}
                value={firstYear}
              />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="grey" onClick={this.reset}>
            <Icon name="remove" /> 重置
          </Button>
          <Button color="blue" onClick={this.submit}>
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
})

export default connect(mapStateToProps, mapActionToProps)(ModalEditUser)
