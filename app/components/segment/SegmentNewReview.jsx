import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as reviewActions from '../../actions/reviewActions'
import GridReview from '../../components/grid/GridReview'
import Spinner from '../../components/spinner/Spinner'

class SegmentNewReview extends Component {
  componentDidMount() {
    this.props.fetchNewReviews()
  }
  render() {
    if (this.props.isFetching) {
      return (<div style={{ marginTop: '3em' }}>
        <Spinner />
      </div>)
    }
    return (
      <GridReview
        items={this.props.reviews.data.slice(0, 3)}
        itemsPerRow={3}
        history={this.props.history}
      />
    )
  }
}

// maps state from store to props
const mapStateToProps = state => ({
  reviews: state.newReviews,
  isFetching: state.newReviews.isFetching,
})

// maps actions to props
const mapActionToProps = dispatch => ({
  fetchNewReviews: () => dispatch(reviewActions.fetchNewReviews()),
})

export default connect(mapStateToProps, mapActionToProps)(SegmentNewReview)
