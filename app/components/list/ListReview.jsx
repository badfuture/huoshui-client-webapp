import React from 'react'
import { Item } from 'semantic-ui-react'
import ItemReview from './ItemReview'


const ListReview = props => (
  <Item.Group divided>
    {props.reviews.map((review, index) => (
      <ItemReview
        key={index}
        review={review} {...props}
      />
    ))}
  </Item.Group>
)

export default ListReview
