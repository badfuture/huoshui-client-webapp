import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Icon, Divider, Container, Grid } from 'semantic-ui-react'
import ListInfinite from '../../components/list/ListInfinite'
import * as deptActions from '../../actions/deptActions'
import CardDept from '../../components/card/CardDept'
import deptData from '../../data/dept.json'

class DeptsDetailContainer extends Component {
  componentDidUpdate(prevProps) {
    const oldId = prevProps.match.params.id
    const newId = this.props.match.params.id
    if (newId !== oldId) {
      this.props.reset()
    }
  }
  componentWillUnmount() {
    this.props.reset()
  }

  render() {
    const deptName = this.props.match.params.id
    const deptImg = deptData.filter(dept => dept.header === deptName)[0].image
    return (
      <div className="container-main">
        <Container>
          <Header as="h2" >
            <Icon name="map signs" />
            <Header.Content>
              逛逛：{deptName}
            </Header.Content>
          </Header>
          <Divider hidden />

          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={11} style={{ paddingRight: '3.5rem' }}>
                <ListInfinite {...this.props} />
              </Grid.Column>
              <Grid.Column width={5} style={{ paddingLeft: '1.0rem' }}>
                <CardDept header={deptName} image={deptImg} />
              </Grid.Column>
            </Grid.Row>
          </Grid>

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
