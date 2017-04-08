import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name="user" />
    56个人关注了她
  </a>
)

const CardProf = () => (
  <Card
    image="../../images/sample/sample5.png"
    header="黄教授"
    meta="电子系"
    description="世界上最好的教授"
    extra={extra}
  />
)

export default CardProf
