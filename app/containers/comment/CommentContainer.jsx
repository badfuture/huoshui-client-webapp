import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import CommentList from '../../components/comment/CommentList'
import * as commentActions from '../../actions/commentActions'


class CommentContainer extends Component {
  componentDidMount() {

  }

  componentDidUpdate(prevProps) {

  }

  render() {
    return (
      <CommentList comments={this.props.comments} {...this.props} />
    )
  }
}

// map redux states to prop
const mapStateToProps = state => ({

})

// map redux actions to prop
const mapActionToProps = dispatch => ({
  submitComment: comment => dispatch(commentActions.submitComment(comment)),
})

export default connect(mapStateToProps, mapActionToProps)(CommentContainer)
