import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Icon, Divider, Container } from 'semantic-ui-react'
import ListInfinite from '../../components/list/ListInfinite'
import * as deptActions from '../../actions/deptActions'

class DeptsDetailContainer extends Component {
  componentDidMount() {
    this.props.reset()
  }
  componentDidUpdate(prevProps) {
    const oldId = prevProps.match.params.id
    const newId = this.props.match.params.id
    if (newId !== oldId) { this.props.reset() }
  }
  render() {
    return (
      <div className="container-main">
        <Container>
          <Header as="h2" >
            <Icon name="map signs" />
            <Header.Content>
              逛逛：{this.props.match.params.id}
            </Header.Content>
          </Header>
          <Divider hidden />
          <ListInfinite {...this.props} />
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  deptState: state.deptDetailList,
  itemList: state.deptDetailList.data,
  hasMore: state.deptDetailList.hasMore,
  isFetching: state.deptDetailList.isFetching,
})

const mapActionToProps = dispatch => ({
  loadMore: ({ skip, dept }) => dispatch(deptActions.loadDeptList({ skip, dept })),
  reset: () => dispatch(deptActions.resetData()),
})
export default connect(mapStateToProps, mapActionToProps)(DeptsDetailContainer)
