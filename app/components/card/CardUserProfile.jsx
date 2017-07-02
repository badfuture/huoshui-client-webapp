import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import localStore from 'store'
import ModalEditUser from '../../components/modal/ModalEditUser'
import ModalEditUserAvatar from '../../components/modal/ModalEditUserAvatar'

const CardUserProfile = () => {
  const defaultUser = {
    username: '匿名用户',
    avatar: '../../images/sample/sample3.jpg',
    emial: '未知邮箱',
  }

  const user = localStore.get('user') || defaultUser
  return (
    <Card style={{ marginRight: 'auto', marginLeft: 'auto' }}>
      <ModalEditUserAvatar
        trigger={
          <Image
            src={user.avatar}
            label={{ as: 'a', corner: 'left', icon: 'user outline' }}
          />
        }
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

export default CardUserProfile
