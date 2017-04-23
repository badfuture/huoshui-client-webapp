import React, { PropTypes } from 'react'
import { Card, Header, Image } from 'semantic-ui-react'
import moment from 'moment'

const propTypes = {
  review: PropTypes.object.isRequired,
}

const calcScore = ({ expressive, kind, professional }) => {
  const avg = (expressive + kind + professional) / 3
  const score = +avg.toFixed(2)
  return (
    score
  )
}

const CardReviewOverview = props => (
  <Card fluid raised style={{ boxShadow: 'none', padding: '1em' }}>
    <Card.Content>
      <Image floated="left" size="mini" src="/images/sample/sample2.png" />
      <Card.Header>
        <Header as="h4">
          {props.review.Prof.name} 的 {props.review.Course.name}
        </Header>
      </Card.Header>
      <Card.Meta>
        <span>
          {props.review.Author.username} &nbsp; {calcScore(props.review)}分
          <span style={{ float: 'right' }}>{moment(props.review.createdAt).fromNow()}</span>
        </span>
      </Card.Meta>
      <Card.Description>
        {props.review.text}
      </Card.Description>
    </Card.Content>
  </Card>
)


// set propTypes
CardReviewOverview.propTypes = propTypes

export default CardReviewOverview
