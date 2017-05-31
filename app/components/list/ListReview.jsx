import React from 'react'
import { Item, Label } from 'semantic-ui-react'

const ListReview = props => (
  <Item.Group divided>
    {props.reviews.map(review => (
      <Item key={review.id} onClick={() => { props.history.push(`/reviews/${review.id}`) }}>
        <Item.Content>
          <Item.Meta>
            <span>{review.text}</span>
          </Item.Meta>
          <Item.Extra>
            <div style={{ marginTop: '1em' }}>
              <Label content={`专业：${review.professional}`} style={{ backgroundColor: 'rgba(232, 232, 232, 0)' }} />
              <Label content={`表达：${review.expressive}`} style={{ backgroundColor: 'rgba(232, 232, 232, 0)' }} />
              <Label content={`友好：${review.kind}`} style={{ backgroundColor: 'rgba(232, 232, 232, 0)' }} />
            </div>

          </Item.Extra>
        </Item.Content>
      </Item>
    ))}
  </Item.Group>
)

export default ListReview
