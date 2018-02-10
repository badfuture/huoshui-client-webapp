import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { Table } from 'semantic-ui-react'
import RowDeptInfinite from './RowDeptInfinite'
import Spinner from '../../components/spinner/Spinner'

export default class TableDeptInfinite extends React.Component {
  loadMore = () => {
    if (!this.props.isFetching) {
      this.props.loadMore({
        skip: this.props.itemList.length,
        dept: this.props.match.params.id,
      })
    }
  }

  render() {
    return (
      <div>
        <Table celled structured striped compact color="blue">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell rowSpan="2">课程</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">评价人数</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">综合打分</Table.HeaderCell>
              <Table.HeaderCell colSpan="3">核心评价</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>专业</Table.HeaderCell>
              <Table.HeaderCell>表达</Table.HeaderCell>
              <Table.HeaderCell>友好</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {
                this.props.itemList.map(item => (
                  <RowDeptInfinite
                    key={item.id}
                    {...item}
                    {...this.props}
                  />
                ))
              }
          </Table.Body>
        </Table>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadMore}
          hasMore={this.props.hasMore}
          loader={<div style={{ marginTop: '3em' }} ><Spinner /></div>}
        />
      </div>


    )
  }
}
