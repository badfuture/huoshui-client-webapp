import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as reviewActions from '../../actions/reviewActions'
import GridReview from '../../components/grid/GridReview'
import Spinner from '../../components/spinner/Spinner'

class SegmentHotReview extends Component {
  componentDidMount() {
    this.props.fetchHotReviews()
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
  reviews: state.hotReviews,
  isFetching: state.hotReviews.isFetching,
})

// maps actions to props
const mapActionToProps = dispatch => ({
  fetchHotReviews: () => dispatch(reviewActions.fetchHotReviews()),
})

export default connect(mapStateToProps, mapActionToProps)(SegmentHotReview)
