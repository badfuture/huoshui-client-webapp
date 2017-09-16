
import React from 'react'
import { Link } from 'react-router-dom'
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
      <Image floated="left" size="mini" src={props.author.avatar} />
      <Card.Header>
        <Header as="h4">
          <Link to={`/profs/${props.prof.id}`}>{props.prof.name}</Link> 的 <Link to={`/courses/${props.course.id}`}>{props.course.name}</Link>
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
