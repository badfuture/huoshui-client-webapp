import React from 'react'
import { List } from 'react-virtualized'

// List data as an array of strings
const list = [
  'Brian Vaughn',
  // And so on...
]

for (let i = 0; i < 1000; i++) {
  list.push(`me_${i}`)
}

const rowRenderer = ({
  key,         // Unique key within array of rows
  index,       // Index of row within collection
  isScrolling, // The List is currently being scrolled
  isVisible,   // This row is visible within the List (eg it is not an overscanned row)
  style,        // Style object to be applied to row (to position it)
}) => (
  <div
    key={key}
    style={style}
  >
    {list[index]}
  </div>
)

const ListInfinite = () => (
  <List
    width={500}
    height={600}
    rowCount={list.length}
    rowHeight={20}
    rowRenderer={rowRenderer}
  />
)

export default ListInfinite
