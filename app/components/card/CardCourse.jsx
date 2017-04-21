import React, { PropTypes } from 'react'
import { Route } from 'react-router-dom'
import { Card, Header, Image, Icon } from 'semantic-ui-react'
import moment from 'moment'
import Rating from 'react-star-rating-component'
import styles from './styles/CardReviewOverview.scss'

const propTypes = {
  text: PropTypes.string.isRequired,
  Course: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  Prof: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  Author: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
  createdAt: PropTypes.string.isRequired,
}

const calcScore = ({ expressive, kind, professional }) => {
  const avg = (expressive + kind + professional) / 3
  const score = +avg.toFixed(2)
  return (
    score
  )
}

const CardCourse = props => (
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
            <Rating
              name="rate"
              value={calcScore(props)}
              starCount={5}
              editing={false}
              renderStarIcon={() => <span><Icon name="star" /></span>}
              renderStarIconHalf={() => <span><Icon name="star half empty" /></span>}
              emptyStarColor="rgba(255, 221, 139, 0.63)"
            />
          </div>
        </Card.Content>
      </Card>
    )}
  />
)


// set propTypes
CardCourse.propTypes = propTypes

export default CardCourse
