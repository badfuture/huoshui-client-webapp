import React from 'react'
import { Card, Header, Image, Divider } from 'semantic-ui-react'
import Rating from '../rating/RatingBasic'
import styles from './styles/CardProfOverview.scss'

const CardMyProf = props => (
  <Card fluid style={{ boxShadow: 'none' }} onClick={() => { props.history.push(`/profs/${props.id}`) }}>
    <Card.Content>
      <Card.Header>
        <Header as="h4">
          {props.name}
        </Header>
      </Card.Header>
      <Card.Meta>
        <Rating value={props.scoreOverall} />
      </Card.Meta>
      <Card.Description>
        {!!(props.motto) &&
          <div>
            <span>
              {props.motto}
            </span>
            <Divider hidden className={styles.dividerMargin} />
          </div>
        }
      </Card.Description>
    </Card.Content>
  </Card>
)

export default CardMyProf
