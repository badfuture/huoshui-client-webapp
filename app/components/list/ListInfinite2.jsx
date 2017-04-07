import React from 'react'
import { InfiniteLoader, List } from 'react-virtualized'

// This example assumes you have a way to know/load this information
const remoteRowCount = 1000

const list = []

for (let i = 0; i < 10; i++) {
  list.push(`me_${i}`)
}


function isRowLoaded({ index }) {
  return !!list[index]
}

function loadMoreRows({ startIndex, stopIndex }) {
  list.push('5')
}

function rowRenderer({ key, index, style }) {
  return (
    <div
      key={key}
      style={style}
    >
      {list[index]}
    </div>
  )
}

const ListInfinite2 = () => (
  <InfiniteLoader
    isRowLoaded={isRowLoaded}
    loadMoreRows={loadMoreRows}
    rowCount={remoteRowCount}
  >
    {({ onRowsRendered, registerChild }) => (
      <List
        height={200}
        onRowsRendered={onRowsRendered}
        ref={registerChild}
        rowCount={remoteRowCount}
        rowHeight={20}
        rowRenderer={rowRenderer}
        width={300}
      />
    )}
  </InfiniteLoader>
)

export default ListInfinite2
