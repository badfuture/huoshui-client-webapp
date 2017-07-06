import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Icon, Image } from 'semantic-ui-react'
import * as authActions from '../../actions/authActions'
import * as modalActions from '../../actions/modalActions'
import ModalEditUser from '../../components/modal/ModalEditUser'
import ModalEditUserAvatar from '../../components/modal/ModalEditUserAvatar'

const defaultUser = {
  username: '匿名用户',
  avatar: '../../images/sample/sample3.jpg',
  emial: '未知邮箱',
}

class CardUserProfile extends Component {

  render() {
    const user = this.props.user || defaultUser
    return (
      <Card style={{ marginRight: 'auto', marginLeft: 'auto' }}>
        <ModalEditUserAvatar
          isAvatarUploading={this.props.isAvatarUploading}
          uploadAvatar={this.props.uploadAvatar}
          isVisible={this.props.editAvatarModalVisible}
          onClose={this.props.closeEditAvatarModal}
        />
        <Image
          src={user.avatar}
          label={{ as: 'a', corner: 'left', icon: 'user outline' }}
          onClick={this.props.openEditAvatarModal}
        />
        <Card.Content>
          <Card.Header>
            {user.username}
          </Card.Header>
          <Card.Meta>
            {user.email}
          </Card.Meta>
          <Card.Description />
        </Card.Content>
        <Card.Content extra>
          <ModalEditUser
            trigger={
              <a>
                <Icon name="edit" />
                修改用户信息
              </a>
            }
          />
        </Card.Content>
      </Card>
    )
  }
}

// map redux states to prop
const mapStateToProps = state => ({
  user: state.auth.user,
  isAvatarUploading: state.auth.isAvatarUploading,
  editAvatarModalVisible: state.modals.editAvatarModalVisible,
})

// map redux actions to prop
const mapActionToProps = dispatch => ({
  uploadAvatar: formData => dispatch(authActions.uploadAvatar(formData)),
  openEditAvatarModal: () => dispatch(modalActions.openEditAvatarModal()),
  closeEditAvatarModal: () => dispatch(modalActions.closeEditAvatarModal()),
})

export default connect(mapStateToProps, mapActionToProps)(CardUserProfile)
