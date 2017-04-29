import React, { PropTypes } from 'react'
import { Route } from 'react-router-dom'
import { Card, Header, Image } from 'semantic-ui-react'
import moment from 'moment'
import Rating from '../rating/RatingBasic'
import styles from './styles/CardReviewOverview.scss'

const propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  Course: PropTypes.object.isRequired,
  Prof: PropTypes.object.isRequired,
  Author: PropTypes.object.isRequired,
  createdAt: PropTypes.string.isRequired,
}

const calcScore = ({ expressive, kind, professional }) => {
  const avg = (expressive + kind + professional) / 3
  const score = +avg.toFixed(2)
  return (
    score
  )
}

const CardReviewOverview = props => (
  <Route
    render={({ history }) => (
      <Card
        className={styles.cardRaise}
        onClick={() => { history.push(`/reviews/${props.id}`) }}
      >
        <Card.Content>
          <Image floated="left" size="mini" src="/images/sample/sample2.png" />
          <Card.Header>
            <Header as="h4">
              <div className={styles.header}>
                <span>{props.Prof.name}</span> 的 <span>{props.Course.name}</span>
              </div>
            </Header>
          </Card.Header>
          <Card.Meta className={styles.subheader}>
            <span>{props.Author.username} &nbsp; {moment(props.createdAt).fromNow()}</span>
          </Card.Meta>
          <Card.Description className={styles.description}>
            <p>{props.text}</p>
          </Card.Description>
          <div className={styles.bottom}>
            <Rating value={calcScore(props)} />
          </div>
        </Card.Content>
      </Card>
    )}
  />
)


// set propTypes
CardReviewOverview.propTypes = propTypes

export default CardReviewOverview
