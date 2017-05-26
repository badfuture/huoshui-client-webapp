import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import * as ProfActions from '../../actions/profActions'
import ProfDetail from '../../components/page/ProfDetail'

class ProfDetailContainer extends Component {
  componentDidMount() {
    this.props.fetchProfById(this.props.match.params.id)
  }

  render() {
    return (
      <div className="container-main-grey">
        <Container>
          <ProfDetail {...this.props} />
        </Container>
      </div>
    )
  }
}

// map redux states to prop
const mapStateToProps = state => ({
  prof: state.prof.data,
  isFetching: state.prof.isFetching,
  currentView: state.prof.currentView,
})

// map redux actions to prop
const mapActionToProps = dispatch => ({
  fetchProfById: ProfId => dispatch(ProfActions.fetchProfById(ProfId)),
})

export default connect(mapStateToProps, mapActionToProps)(ProfDetailContainer)
