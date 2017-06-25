import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import localStore from 'store'

const extra = (
  <a>
    <Icon name="edit" />
    修改用户信息
  </a>
)

const CardUserProfile = () => {
  const defaultUser = {
    username: '匿名用户',
    avatar: '../../images/sample/sample3.jpg',
    emial: '未知邮箱',
  }

  const user = localStore.get('user') || defaultUser
  return (
    <Card
      image={user.avatar}
      header={user.username}
      meta={user.email}
      extra={extra}
    />
  )
}

export default CardUserProfile
