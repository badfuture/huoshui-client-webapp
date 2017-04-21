import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import * as reviewActions from '../../actions/reviewActions'
import ReviewDetails from '../../components/page/ReviewDetails'

const propTypes = {
  fetchReviewById: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
}

class ReviewDetailsContainer extends Component {
  componentDidMount() {
    this.props.fetchReviewById(this.props.match.params.id)
  }

  render() {
    return (
      <div className="container-main-grey">
        <Container>
          <ReviewDetails {...this.props} />
        </Container>
      </div>
    )
  }
}

// props validation
ReviewDetailsContainer.propTypes = propTypes

// map redux states to prop
const mapStateToProps = state => ({
  review: state.review.data,
  isFetching: state.review.isFetching,
})

// map redux actions to prop
const mapActionToProps = dispatch => ({
  fetchReviewById: reviewId => dispatch(reviewActions.fetchReviewById(reviewId)),
})

export default connect(mapStateToProps, mapActionToProps)(ReviewDetailsContainer)
