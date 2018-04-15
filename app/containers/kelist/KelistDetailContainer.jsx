import React, { Component } from 'react'
import { render } from 'react-dom'
import { Item, Container, Segment } from 'semantic-ui-react'
import { SortableContainer, SortableElement, SortableHandle, arrayMove } from 'react-sortable-hoc'
import classNames from 'classnames'
import style from './KelistDetailContainer.scss'

const Handle = SortableHandle(() => <div className={style.handle} />)

const SortableItem = SortableElement(({ value }) =>
  <div
    className={classNames(style.item, style.stylizedItem)}
    style={{
      height: 50,
    }}
  >
    <Handle />
    <div className={style.wrapper}>
      <span>Course Item</span> {value}
    </div>
  </div>,
)

const SortableList = SortableContainer(({ items }) => (
  <div className={classNames(style.list, style.stylizedList)}>
    {items.map(({ value, id }, index) => (
      <SortableItem key={`item-${index}`} index={index} value={value} />
    ))}
  </div>
))

export default class SortableComponent extends Component {
  state = {
    items: [
      { value: 'Item 1', id: 89 },
      { value: 'Item 2', id: 559 },
      { value: 'Item 3', id: 130 },
      { value: 'Item 4', id: 519 },
      { value: 'Item 5', id: 200 },
      { value: 'Item 6', id: 150 },
    ],
  };
  onSortEnd = ({ oldIndex, newIndex }) => {
    const item = this.state.items[oldIndex]
    console.log(item)
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    })
  };
  render() {
    console.log(this.state.items)
    return (
      <div className="container-main-grey">
        <Container>
          <Segment style={{ padding: 0 }}>
            <SortableList
              items={this.state.items} onSortEnd={this.onSortEnd}
            />
          </Segment>
        </Container>
      </div>
    )
  }
}
