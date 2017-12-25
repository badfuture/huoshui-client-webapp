import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as profActions from '../../actions/profActions'
import {
  INFO, STAT, EDUCATION, RESEARCH, COURSE,
} from '../../constants/MenuProfStates'

class MenuProfDetail extends Component {
  handleItemClick = (e, { name }) => {
    this.props.switchView(name)
  }

  render() {
    return (
      <Menu borderless size="large" stackable>
        <Menu.Item
          name={STAT}
          active={this.props.currentView === STAT}
          onClick={this.handleItemClick}
        >
          综合评价
        </Menu.Item>

        <Menu.Item
          name={COURSE}
          active={this.props.currentView === COURSE}
          onClick={this.handleItemClick}
        >
          相关课程
        </Menu.Item>

        <Menu.Item
          name={INFO}
          active={this.props.currentView === INFO}
          onClick={this.handleItemClick}
        >
          基本资料
        </Menu.Item>

        <Menu.Item
          name={EDUCATION}
          active={this.props.currentView === EDUCATION}
          onClick={this.handleItemClick}
        >
          教育成果
        </Menu.Item>
        <Menu.Item
          name={RESEARCH}
          active={this.props.currentView === RESEARCH}
          onClick={this.handleItemClick}
        >
          科研方向
        </Menu.Item>
      </Menu>
    )
  }
}

// maps state from store to props
const mapStateToProps = state => ({
  currentView: state.prof.currentView,
})

// maps actions to props
const mapActionToProps = dispatch => ({
  switchView: view => dispatch(profActions.switchView(view)),
})

export default connect(mapStateToProps, mapActionToProps)(MenuProfDetail)
