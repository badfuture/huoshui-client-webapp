import React, { PropTypes, Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as reviewActions from '../../actions/reviewActions'
import {
  NEW_REVIEW, HOT_REVIEW,
} from '../../constants/StateEnum'

const propTypes = {
  currentView: PropTypes.string.isRequired,
  totalPage: PropTypes.number.isRequired,
  newCurrPage: PropTypes.number.isRequired,
  hotCurrPage: PropTypes.number.isRequired,
  switchView: PropTypes.func.isRequired,
  initPage: PropTypes.func.isRequired,
  goPrevPage: PropTypes.func.isRequired,
  goNextPage: PropTypes.func.isRequired,
}

class MenuReview extends Component {
  handleItemClick = (e, { name }) => {
    this.props.switchView(name)
    this.props.initPage()
  }

  render() {
    return (
      <Menu borderless >
        <Menu.Item
          name={NEW_REVIEW}
          active={this.props.currentView === NEW_REVIEW}
          onClick={this.handleItemClick}
        >
          最新评论
        </Menu.Item>

        <Menu.Item
          name={HOT_REVIEW}
          active={this.props.currentView === HOT_REVIEW}
          onClick={this.handleItemClick}
        >
          热门评论
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Button.Group size="small">
              <Button
                basic
                icon="left chevron"
                onClick={this.props.goPrevPage}
              />
              <Button basic>
                <span>
                  {this.props.currentView === NEW_REVIEW &&
                    <span style={{ color: '#2185d0' }}>
                      {this.props.newCurrPage}
                    </span>
                  }
                  {this.props.currentView === HOT_REVIEW &&
                    <span style={{ color: '#2185d0' }}>
                      {this.props.hotCurrPage}
                    </span>
                  }
                  <span>&nbsp; / &nbsp;</span>
                  <span>{this.props.totalPage}</span>
                </span>
              </Button>
              <Button
                basic
                icon="right chevron"
                onClick={this.props.goNextPage}
              />
            </Button.Group>
          </Menu.Item>
        </Menu.Menu>

      </Menu>
    )
  }
}

// maps state from store to props
const mapStateToProps = state => ({
  currentView: state.reviews.currentView,
  totalPage: state.reviews.totalPage,
  newCurrPage: state.reviews.newCurrPage,
  hotCurrPage: state.reviews.hotCurrPage,
})

// maps actions to props
const mapActionToProps = dispatch => ({
  initPage: () => dispatch(reviewActions.initializePage()),
  switchView: view => dispatch(reviewActions.switchView(view)),
  goNextPage: () => dispatch(reviewActions.goNextPage()),
  goPrevPage: () => dispatch(reviewActions.goPrevPage()),
})

// set propTypes
MenuReview.propTypes = propTypes

export default connect(mapStateToProps, mapActionToProps)(MenuReview)
