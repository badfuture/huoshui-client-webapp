import React, { PropTypes } from 'react'
import { Card, Image } from 'semantic-ui-react'
import styles from './styles/CardKelist.scss'

const propTypes = {
  image: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}


const CardKelist = props => (
  <Card
    className={styles.cardRaise}
    onClick={() => { props.history.push(`/kelists/${1}`) }}
  >
    <div style={{ width: '100%', overflow: 'hidden', paddingBottom: '56.25%', position: 'relative' }}>
      <Image src={props.image} style={{ width: '100%', height: '100%', position: 'absolute' }} />
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

CardKelist.propTypes = propTypes

export default CardKelist
