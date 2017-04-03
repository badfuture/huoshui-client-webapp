import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name="user" />
    16 Friends
  </a>
)

const CardDept = () => (
  <Card
    image="/images/dept/full/rocket.jpg"
    header="武装部"
    meta="西南交通大学"
    description="只教军训和把妹."
    extra={extra}
  />
)

export default CardDept
