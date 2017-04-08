import React from 'react'
import Waypoint from 'react-waypoint'

/**
 * Calls a function when you scroll to the element.
 */

class WaypointScrollTop extends React.Component {

  handleEnter = () => console.log('enter')
  handleLeave = () => console.log('leave')
  handleChange = ({ previousPosition, currentPosition, waypointTop, event }) => {
    console.log(currentPosition)
    console.log(waypointTop)
  }

  render() {
    return (
      <Waypoint
        topOffset="0%"
        onEnter={this.handleEnter}
        onLeave={this.handleLeave}
        onPositionChange={this.handleChange}
      />
    )
  }

}

export default WaypointScrollTop
