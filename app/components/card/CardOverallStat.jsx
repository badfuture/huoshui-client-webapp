
import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Header, Image, Segment, Container } from 'semantic-ui-react'
import ChartBar from '../../components/chart/ChartBar'
import moment from 'moment'
import StatUtil from '../../utils/StatUtil'

const CardOverallStat = props => (
  <Card fluid raised style={{ boxShadow: 'none', padding: '1em' }}>
    <Card.Content>
      <Card.Header>
        <Header as="h4">
          {`总体评价 ${StatUtil.calcScore(props.Stat)}分`}
        </Header>
      </Card.Header>
      <Card.Meta />
      <Card.Description>
        <Container style={{ width: '100%', height: '200px', padding: '10px 10px 0px 10px', textAlign: 'center' }}>
          <ChartBar {...props.Stat} />
        </Container>
      </Card.Description>
    </Card.Content>
  </Card>
)

export default CardOverallStat
