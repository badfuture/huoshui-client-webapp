import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Icon, Image } from 'semantic-ui-react'
import localStore from 'store'
import * as authActions from '../../actions/authActions'
import * as modalActions from '../../actions/modalActions'
import ModalEditUser from '../../components/modal/ModalEditUser'
import ModalEditUserAvatar from '../../components/modal/ModalEditUserAvatar'

class CardUserProfile extends Component {

  render() {
    const user = this.props.user

    return (
      <Card style={{ marginRight: 'auto', marginLeft: 'auto' }}>
        <ModalEditUserAvatar
          user={this.props.user}
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
        {this.props.isAuthenticated &&
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
        }
      </Card>
    )
  }
}

// map redux states to prop
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  isAvatarUploading: state.auth.isAvatarUploading,
  editAvatarModalVisible: state.modals.editAvatarModalVisible,
})

// map redux actions to prop
const mapActionToProps = dispatch => ({
  uploadAvatar: dataURL => dispatch(authActions.uploadAvatar(dataURL)),
  openEditAvatarModal: () => {
    if (localStore.get('token')) {
      dispatch(modalActions.openEditAvatarModal())
    } else {
      dispatch(modalActions.openPromptSignupModal())
    }
  },
  closeEditAvatarModal: () => dispatch(modalActions.closeEditAvatarModal()),
})

export default connect(mapStateToProps, mapActionToProps)(CardUserProfile)
