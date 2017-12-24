import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Grid, Container, Segment, Item, Icon, List, Header } from 'semantic-ui-react'
import localStore from 'store'
import CardUserProfile from '../../components/card/CardUserProfile'
import MenuProfile from '../../components/menu/MenuProfile'
import GridMyReview from '../../components/grid/GridMyReview'

class MyProfileContainer extends Component {

  constructor() {
    super()
    this.state = {
      activeTab: 'review',
      reviews: [],
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeTab: name })
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="container-main-grey">
        <Container>
          <Grid padded="vertically" stackable divided centered>
            <Grid.Row>
              <Grid.Column width={5}>
                <Container textAlign="center">
                  <CardUserProfile />
                </Container>
              </Grid.Column>
              <Grid.Column width={11}>
                <Container style={{ padding: '0em 2em 0em 2em' }}>
                  <MenuProfile
                    onTabClick={this.handleItemClick}
                    activeTab={this.state.activeTab}
                  />
                  {
                    this.state.activeTab === 'review' &&
                    <GridMyReview
                      items={this.props.user.Reviews || []}
                      itemsPerRow={3}
                    />
                  }
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }
}

// map redux states to prop
const mapStateToProps = state => ({
  user: state.auth.user,
})

// map redux actions to prop
const mapActionToProps = dispatch => ({
})

export default connect(mapStateToProps, mapActionToProps)(MyProfileContainer)
