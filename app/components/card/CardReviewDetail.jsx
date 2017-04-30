import React from 'react'
import { Card, Header, Image } from 'semantic-ui-react'
import moment from 'moment'

const calcScore = ({ expressive, kind, professional }) => {
  const avg = (expressive + kind + professional) / 3
  const score = +avg.toFixed(2)
  return (
    score || ''
  )
}

const CardReviewDetail = props => (
  <Card fluid raised style={{ boxShadow: 'none', padding: '1em' }}>
    <Card.Content>
      <Image floated="left" size="mini" src="/images/sample/sample2.png" />
      <Card.Header>
        <Header as="h4">
          {props.prof.name} 的 {props.course.name}
        </Header>
      </Card.Header>
      <Card.Meta>
        <span>
          <span>{props.author.username} &nbsp; {calcScore(props.review)}分</span>
          <span style={{ float: 'right' }}>{moment(props.review.createdAt).fromNow()}</span>
        </span>
      </Card.Meta>
      <Card.Description>
        {props.review.text}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default CardReviewDetail
