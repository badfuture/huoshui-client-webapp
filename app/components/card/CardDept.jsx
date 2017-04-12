import React, { PropTypes } from 'react'
import { Card, Image } from 'semantic-ui-react'
import styles from './styles/CardDept.scss'

const propTypes = {
  image: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

const printFoo = () => {

}

const CardDept = props => (
  <Card className={styles.cardRaise} onClick={printFoo}>
    <div style={{ width: '100%', overflow: 'hidden', paddingBottom: '56.25%', position: 'relative' }}>
      <Image src={props.image} style={{ width: '100%', height: '100%', position: 'absolute' }} />
    </div>
    <Card.Content>
      <Card.Header>
        {props.header}
      </Card.Header>
      <Card.Meta>
        <span>
          西南交通大学
        </span>
      </Card.Meta>
      <Card.Description>
        {props.description}
      </Card.Description>
    </Card.Content>
  </Card>
)

CardDept.propTypes = propTypes

export default CardDept
