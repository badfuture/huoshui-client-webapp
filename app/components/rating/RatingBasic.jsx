/* eslint no-unused-vars: "error"*/
import React, { PropTypes } from 'react'
import { Icon } from 'semantic-ui-react'
import Rating from 'react-star-rating-component'

const RatingBasic = props => (
  <Rating
    name="rate"
    value={props.value}
    starCount={props.maxStars}
    editing={!props.isReadOnly}
    renderStarIcon={() => <span><Icon name="star" /></span>}
    renderStarIconHalf={() => <span><Icon name="star half empty" /></span>}
    starColor="#ffac2d"
    emptyStarColor="rgba(255, 221, 139, 0.63)"
  />
)

RatingBasic.propTypes = {
  value: PropTypes.number.isRequired,
  maxStars: PropTypes.number,
  isReadOnly: PropTypes.bool,
}
RatingBasic.defaultProps = {
  isReadOnly: true,
  maxStars: 5,
}

export default RatingBasic
