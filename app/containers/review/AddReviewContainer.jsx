import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import * as addReviewActions from '../../actions/addReviewActions'
import FormAddReview from '../../components/form/FormAddReview'

class AddReviewContainer extends Component {
  componentDidMount() {
    this.props.fetchCourseById(this.props.match.params.id)
  }

  render() {
    return (
      <div className="container-main-grey">
        <Container>
          <FormAddReview {...this.props} />
        </Container>
      </div>
    )
  }
}

// map redux states to prop
const mapStateToProps = state => ({
  data: state.addReview.data,
  isFetching: state.addReview.isFetching,
})

// map redux actions to prop
const mapActionToProps = dispatch => ({
  submitReview: data => dispatch(addReviewActions.submitReview(data)),
})

export default connect(mapStateToProps, mapActionToProps)(AddReviewContainer)
