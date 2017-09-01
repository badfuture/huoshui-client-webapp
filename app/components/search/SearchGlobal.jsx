import React, { Component } from 'react'
import { Search } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styles from './styles/SearchGlobal.scss'

export default class SearchGlobal extends Component {
  state: {
    isComposing: false
  }

  componentWillMount() {
    this.setState({ value: '' })
    this.props.resetComponent()
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

  resultRenderer = ({ type, dbID, title, description }) => {
    let path = ''
    if (type === 'prof') {
      path = 'profs'
    } else {
      path = 'courses'
    }
    return (
      <Link to={`/${path}/${dbID}`}>
        <div key="content" className="content">
          {title && <div className="title">{title}</div>}
          {description && <div className="description">{description}</div>}
        </div>
      </Link>
    )
  }

  render() {
    const displayValue = (this.props.optionSelected) ? this.props.valueDisplayed : this.state.value
    return (
      <Search
        loading={this.props.isFetching}
        onSearchChange={this.handleSearchChange}
        results={this.props.options}
        resultRenderer={this.resultRenderer}
        value={displayValue}
        className={styles.searchInput}
        placeholder="要点评的教师姓名, 课程名"
        noResultsMessage="啥都没找到 >_<"
        fluid
        category
        onCompositionStart={this.handleComposition}
        onCompositionUpdate={this.handleComposition}
        onCompositionEnd={this.handleComposition}
      />
    )
  }
}
