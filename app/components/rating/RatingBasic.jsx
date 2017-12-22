/* eslint no-unused-vars: "error" */
import React, { PropTypes } from 'react'
import { Icon, Rating } from 'semantic-ui-react'

const RatingBasic = props => (
  <Rating
    defaultRating={props.value}
    maxRating={props.maxStars}
    icon="star"
    disabled={props.isReadOnly}
  />
)

RatingBasic.propTypes = {
  value: PropTypes.number,
  maxStars: PropTypes.number,
  isReadOnly: PropTypes.bool,
}
RatingBasic.defaultProps = {
  value: 0,
  isReadOnly: true,
  maxStars: 5,
}

export default RatingBasic
