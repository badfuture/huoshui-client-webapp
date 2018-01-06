/* eslint no-unused-vars: "error" */
import React, { PropTypes } from 'react'
import { Icon } from 'semantic-ui-react'
import Rater from 'react-rater'

const RatingBasic = props => (
  <span>
    <Rater interactive={false} rating={props.value} total={5} />
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
