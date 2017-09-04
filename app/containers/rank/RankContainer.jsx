import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import GridRank from '../../components/grid/GridRank'

class RankContainer extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className="container-main-grey">
        <Container>
          <GridRank {...this.props} />
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    // state mappings here
})

const mapActionToProps = action => ({
    // actions mappings here
})

export default connect(mapStateToProps, mapActionToProps)(RankContainer)
