import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import * as reviewActions from '../../actions/reviewActions'
import GridReview from '../../components/grid/GridReview'

const propTypes = {
  fetchReviews: PropTypes.func.isRequired,
  reviews: PropTypes.object.isRequired,
}


class ReviewContainer extends Component {
  componentDidMount() {
    this.props.fetchReviews()
  }
  render() {
    return (
      <div className="container-main-grey">
        <Container>
          <GridReview items={this.props.reviews.data} />
        </Container>
      </div>
    )
  }
}

// maps state from store to props
const mapStateToProps = state => ({
  reviews: state.reviews,
})

// maps actions to props
const mapActionToProps = dispatch => ({
  fetchReviews: () => dispatch(reviewActions.fetchReviews()),
})

// set propTypes
ReviewContainer.propTypes = propTypes

export default connect(mapStateToProps, mapActionToProps)(ReviewContainer)
