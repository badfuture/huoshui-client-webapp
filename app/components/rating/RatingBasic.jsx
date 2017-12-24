/* eslint no-unused-vars: "error" */
import React, { PropTypes } from 'react'
import { Icon, Rating } from 'semantic-ui-react'

const RatingBasic = props => (
  <span>
    <Rating
      defaultRating={Math.round(props.value)}
      maxRating={props.maxStars}
      icon="star"
      disabled={props.isReadOnly}
    />
    { props.value &&
      ` ${props.value.toFixed(1)}分`
    }
  </span>

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
