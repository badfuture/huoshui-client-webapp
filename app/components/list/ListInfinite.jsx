import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { List } from 'semantic-ui-react'
import ListItemCourse from './ListItemCourse'
import Spinner from '../../components/spinner/Spinner'

class ListInfinite extends React.Component {
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
      <List verticalAlign="middle">
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadMore}
          hasMore={this.props.hasMore}
          loader={
            <div style={{ marginTop: '3em' }} >
              <Spinner />
            </div>
          }
        >
          {this.props.itemList.map(
              item => <ListItemCourse key={item.id} {...item} {...this.props} />)}
        </InfiniteScroll>
      </List>
    )
  }
}

export default ListInfinite
