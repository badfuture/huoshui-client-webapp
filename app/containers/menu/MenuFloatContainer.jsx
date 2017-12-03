import React, { Component } from 'react'
import { connect } from 'react-redux'
import localStore from 'store'
import MenuFloat from '../../components/menu/MenuFloat'
import * as modalActions from '../../actions/modalActions'

class MenuFloatContainer extends Component {
  componentDidMount() {}
  render() {
    return (
      <MenuFloat
        openAddReviewModal={this.props.openAddReviewModal}
      />
    )
  }
}

const mapStateToProps = state => ({

})

const mapActionToProps = dispatch => ({

  openAddReviewModal: () => {
    if (localStore.get('user')) {
      dispatch(modalActions.openAddReviewModal())
    } else {
      dispatch(modalActions.openPromptSignupModal())
    }
  },
})

export default connect(mapStateToProps, mapActionToProps)(MenuFloatContainer)
