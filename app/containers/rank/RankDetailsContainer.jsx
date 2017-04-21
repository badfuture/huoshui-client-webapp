import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container } from 'semantic-ui-react'
import GridRank from '../../components/grid/GridRank'

class RankDetailsContainer extends Component {
  render() {
    return (
      <div className="container-main-grey">
        <Container>
          <GridRank />
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
        // state mappings here
})

const mapActionToProps = action => ({
        // actions mappings here
})

export default connect(mapStateToProps, mapActionToProps)(RankDetailsContainer)
