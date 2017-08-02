import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Container, Divider } from 'semantic-ui-react'
import * as reviewActions from '../../actions/reviewActions'
import GridReview from '../../components/grid/GridReview'
import MenuReview from '../../components/menu/MenuReview'
import Spinner from '../../components/spinner/Spinner'

const propTypes = {
  initializePage: PropTypes.func.isRequired,
  reviews: PropTypes.object.isRequired,
}


class ReviewContainer extends Component {
  componentDidMount() {
    this.props.initializePage()
  }
  render() {
    return (
      <div className="container-main-grey">
        <Container>
          <MenuReview />
          <Divider hidden />
          {this.props.reviews.isFetching &&
            <div style={{ marginTop: '3em' }} >
              <Spinner />
            </div>
          }
          {!this.props.reviews.isFetching &&
            <GridReview
              itemsPerRow={5}
              items={this.props.reviews.data}
              history={this.props.history}
            />
          }
          <Divider hidden />
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
  initializePage: () => dispatch(reviewActions.initializePage()),
})

// set propTypes
ReviewContainer.propTypes = propTypes

export default connect(mapStateToProps, mapActionToProps)(ReviewContainer)
