import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name="user" />
    16 Friends
  </a>
)

const CardUserProfile = () => (
  <Card
    image="../../images/sample3.jpg"
    header="Manny"
    meta="Super"
    description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
    extra={extra}
  />
)

export default CardUserProfile
