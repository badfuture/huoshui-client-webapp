import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { Item, Label } from 'semantic-ui-react'

const classificationLabel = (val) => {
  let color = '#f7be17'
  if (val == '好评') {
    color = '#74b2e2'
  } else if (val == '差评') {
    color = '#bababc'
  }
  return (
    <span style={{ float: 'right', color, padding: '8px' }}>
      {`${val}`}
    </span>
  )
}

const ListReview = props => (
  <Item.Group divided>
    {props.reviews.map(review => (
      <Item key={review.id} onClick={() => { props.history.push(`/reviews/${review.id}`) }}>

        <Item.Image size="mini" avatar src={review.Author.avatar} />
        <Item.Content>
          { (review.Course && props.showReviewTarget) &&
            <Item.Meta as="div" style={{ marginTop: '0em', marginBottom: '0.45em' }}>
              {`评 `}
              <Link style={{ color: '#37a' }} to={`/courses/${review.Course.id}`}>{review.Course.name}</Link>
            </Item.Meta>
          }
          <Item.Meta as="div" style={{ marginTop: '0em', marginBottom: '0.65em' }}>
            {`${review.Author.username}, `}
            {(review.Author.Dept && review.Author.firstYear) &&
              <span>
                {`${review.Author.Dept.shortname}-${review.Author.firstYear}, `}
              </span>
            }
            <span style={{ marginLeft: '0px' }}>{`${moment(review.createdAt).fromNow()}`}</span>
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
                  key={tag.id}
                  as="span" basic
                  style={{ backgroundColor: 'rgba(77, 157, 217, 0.78)', color: 'white' }}
                >{tag.name}</Label>
              ))}
              {review.classification && classificationLabel(review.classification)}
            </div>

          </Item.Extra>
        </Item.Content>
      </Item>
    ))}
  </Item.Group>
)

export default ListReview
