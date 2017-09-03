import React from 'react'
import moment from 'moment'
import { Item, Label } from 'semantic-ui-react'

const ListReview = props => (
  <Item.Group divided>
    {props.reviews.map(review => (
      <Item key={review.id} onClick={() => { props.history.push(`/reviews/${review.id}`) }}>
        <Item.Image size="mini" src={review.Author.avatar} />
        <Item.Content>
          <Item.Meta as="div" style={{ marginTop: '0em', marginBottom: '0.45em' }}>
            {review.Author.username}&nbsp; {moment(props.createdAt).fromNow()}
          </Item.Meta>
          <Item.Description style={{ margin: '0px' }}>
            <span>{review.text}</span>
          </Item.Description>
          <Item.Extra>
            <div style={{ marginTop: '1em' }}>
              <Label content={`专业：${review.professional}`} style={{ backgroundColor: 'rgba(232, 232, 232, 0)' }} />
              <Label content={`表达：${review.expressive}`} style={{ backgroundColor: 'rgba(232, 232, 232, 0)' }} />
              <Label content={`友好：${review.kind}`} style={{ backgroundColor: 'rgba(232, 232, 232, 0)' }} />
              {review.Tags && review.Tags.map(tag => (
                <Label
                  as="span" basic
                  style={{ backgroundColor: 'rgba(77, 157, 217, 0.78)', color: 'white' }}
                >{tag.name}</Label>
              ))}
            </div>

          </Item.Extra>
        </Item.Content>
      </Item>
    ))}
  </Item.Group>
)

export default ListReview
