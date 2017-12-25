import React, { PropTypes } from 'react'
import { Card, Header, Image, Divider, Segment, Container } from 'semantic-ui-react'
import ChartBar from '../../components/chart/ChartBar'
import Rating from '../rating/RatingBasic'

const SegmentEmptyProfile = props => (
  <Segment style={{padding: '10em'}}>
    <Header as='h3' textAlign='center'>
      {props.header}
      <Header.Subheader style={{marginTop: '5px'}}>
        {props.subheader}
      </Header.Subheader>
    </Header>
  </Segment>
)

export default SegmentEmptyProfile
