import React from 'react'
import { Card, Header, Image, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Rating from '../rating/RatingBasic'
import styles from './styles/CardCourseOverview.scss'

const calcScore = ({ expressive, kind, professional }) => {
  const avg = (expressive + kind + professional) / 3
  const score = +avg.toFixed(2)
  return (
    score
  )
}

const CardCourseOverview = props => (
  <Card link>
    <Card.Content>
      <Image floated="left" size="mini" src="../images/dept/icons/Dna.png" />
      <Card.Header>
        <Header as="h3">
          <div className={styles.header}>
            <span><Link to={`/profs/1`}>陈天星</Link></span>
          </div>
        </Header>
      </Card.Header>
      <Card.Meta className={styles.subheader}>
        <span>机械工程制图</span><br />
        <span>治学严谨／枯燥无味</span>
      </Card.Meta>
    </Card.Content>
  </Card>
  )

export default CardCourseOverview
