import React from 'react'
import { List, Image } from 'semantic-ui-react'

const src = '/images/dept/icons/Microchip.png'

const ListNewReview = () => (
  <List divided verticalAlign="middle">
    <List.Item>
      <Image avatar src={src} />
      <List.Content>
        Lena
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src={src} />
      <List.Content>
        Lindsay
      </List.Content>
    </List.Item>
  </List>
)

export default ListNewReview
