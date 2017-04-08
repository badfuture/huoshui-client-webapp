import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name="user" />
    5人赞同，1人反对
  </a>
)

const CardReview = () => (
  <Card
    image="../../images/sample/sample6.png"
    header="黄教授"
    meta="评价时间：2017年5月15日"
    description="黄教授上课很认真，教得也还行，就是有点健忘"
    extra={extra}
  />
)

export default CardReview
