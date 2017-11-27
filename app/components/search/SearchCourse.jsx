import React, { Component } from 'react'
import { Search } from 'semantic-ui-react'
import styles from './styles/SearchCourse.scss'

export default class SearchCourse extends Component {
  state: {
    isComposing: false,
    value: ''
  }

  componentWillMount() {
    this.reset()
  }

  reset() {
    this.props.resetComponent()
    this.setState({
      isComposing: false,
      value: '',
    })
  }

  handleSearchChange = (e, data) => {
    this.setState({ value: data.value })
    if (!this.state.isComposing) { this.props.handleSearchChange(e, data.value) }
  }

  handleComposition = (e) => {
    if (e.type === 'compositionend') {
      this.setState({
        isComposing: false,
      })
      this.props.handleSearchChange(e, e.target.value)
    } else {
      this.setState({
        isComposing: true,
      })
    }
  }

  render() {
    const displayValue = (this.props.optionSelected) ? this.props.valueDisplayed : this.state.value
    return (
      <Search
        loading={this.props.isFetching}
        onResultSelect={this.props.handleOptionSelect}
        onSearchChange={this.handleSearchChange}
        results={this.props.options}
        value={displayValue}
        className={styles.searchInput}
        placeholder="要点评的教师姓名, 课程名"
        fluid
        onCompositionStart={this.handleComposition}
        onCompositionUpdate={this.handleComposition}
        onCompositionEnd={this.handleComposition}
      />
    )
  }
}
