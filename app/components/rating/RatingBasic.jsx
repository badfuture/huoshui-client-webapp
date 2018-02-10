/* eslint no-unused-vars: "error" */
import React, { PropTypes } from 'react'
import { Icon } from 'semantic-ui-react'
import Rater from 'react-rater'

const RatingBasic = props => (
  <span>
    <Rater interactive={false} rating={props.value} total={5} />
    { !!props.value &&
      ` ${props.value.toFixed(1)}`
    }
    {
      (!props.hideFen && !!props.value) &&
      `分`
    }
  </span>
)

export default RatingBasic
