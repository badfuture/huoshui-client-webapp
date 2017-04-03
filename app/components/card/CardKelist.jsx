import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name="user" />
    16 Friends
  </a>
)

const CardKelist = () => (
  <Card
    image="/images/dept/full/electrical.jpg"
    header="活水课程250"
    meta="西南交通大学"
    description="综合排名前250的课程"
    extra={extra}
  />
)

export default CardKelist
