import React, { Component } from 'react'
import { connect } from 'react-redux'
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
  openAddReviewModal: () => dispatch(modalActions.openAddReviewModal()),
})

export default connect(mapStateToProps, mapActionToProps)(MenuFloatContainer)
