import React, { PropTypes } from 'react'
import { Card, Header, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Rating from '../rating/RatingBasic'
import styles from './styles/CardReviewOverview.scss'
import StatUtil from '../../utils/StatUtil'

const propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  Course: PropTypes.object.isRequired,
  Prof: PropTypes.object.isRequired,
  Author: PropTypes.object.isRequired,
  createdAt: PropTypes.string.isRequired,
}

const CardMyReview = (props) => {
  const defaultAvatar = '/images/sample/sample3.jpg'
  return (
    <Card
      className={styles.cardRaise}
      as={Link}
      to={`/reviews/${props.id}`}
    >
      <Card.Content>
        <Card.Header style={{ marginTop: '0.1em' }}>
          <Header as="h4">
            <div className={styles.header}>
              <span><Link to={`/profs/${props.Prof.id}`}>{props.Prof.name}</Link></span> 的&nbsp;
              <span><Link to={`/courses/${props.Course.id}`}>{props.Course.name}</Link></span>
            </div>
          </Header>
        </Card.Header>
        <Card.Description className={styles.description}>
          <p>{props.text}</p>
        </Card.Description>
        <div className={styles.bottom}>
          <Rating value={StatUtil.calcScore(props)} />
        </div>
      </Card.Content>
    </Card>
  )
}


// set propTypes
CardMyReview.propTypes = propTypes

export default CardMyReview
