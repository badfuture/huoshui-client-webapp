import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'

import Notifications from 'react-notification-system-redux'

class NotificationSystem extends React.Component {

  render() {
    const { notifications } = this.props

    // Optional styling
    const style = {
      NotificationItem: { // Override the notification item
        DefaultStyle: { // Applied to every notification, regardless of the notification level
          margin: '10px 5px 2px 1px',
        },

        success: { // Applied only to the success notification item
          color: 'red',
        },
      },
    }

    return (
      <Notifications
        notifications={notifications}
        style={style}
        noAnimation={false}
      />
    )
  }
}

NotificationSystem.contextTypes = {
  store: PropTypes.object,
}

NotificationSystem.propTypes = {
  notifications: PropTypes.array,
}

export default connect(
  state => ({ notifications: state.notifications }),
)(NotificationSystem)
