import React, { PropTypes } from 'react'
import { Card, Image } from 'semantic-ui-react'
import styles from './styles/CardRank.scss'

const propTypes = {
  image: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}


const CardRank = props => (
  <Card
    className={styles.cardRaise}
    onClick={() => { props.history.push(`/rankings/${props.id}`) }}
  >
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        paddingBottom: '56.25%',
        position: 'relative',
        backgroundColor: 'rgb(12, 184, 251)',
      }}
    >
      <Image
        src={props.image}
        style={{ width: '100%', height: '100%', position: 'absolute', opacity: '0.6' }}
      />
    </div>
    <Card.Content>
      <Card.Header>
        {props.header}
      </Card.Header>
      <Card.Description>
        {props.description}
      </Card.Description>
    </Card.Content>
  </Card>
)

CardRank.propTypes = propTypes

export default CardRank
