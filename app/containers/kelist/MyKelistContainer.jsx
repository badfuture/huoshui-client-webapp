import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import * as kelistActions from '../../actions/kelistActions'
import CardKelist from '../../components/card/CardKelist'

const propTypes = {
  fetchKelists: PropTypes.func.isRequired,
  kelists: PropTypes.object.isRequired,
}

class MyKelistContainer extends Component {

  componentDidMount() {
    this.props.fetchKelists()
  }
  render() {
    return (
      <div className="container-main-grey">
        <Container>
          <CardKelist {...this.props.kelists} />
        </Container>
      </div>
    )
  }
}

// Maps state from store to props
const mapStateToProps = state => ({
  kelists: state.kelists,
})

// Maps actions to props
const mapDispatchToProps = dispatch => ({
  fetchKelists: () => dispatch(kelistActions.fetchKelists()),
})


// set prop types
MyKelistContainer.propTypes = propTypes

export default connect(mapStateToProps, mapDispatchToProps)(MyKelistContainer)
