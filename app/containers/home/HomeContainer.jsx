import React, { Component } from 'react'
import { Grid, Container, Sticky } from 'semantic-ui-react'
import HomeMainContainer from './HomeMainContainer'
import HomeSideContainer from './HomeSideContainer'

class HomeContainer extends Component {
  constructor() {
    super()
    this.state = {}
  }
  handleContextRef = contextRef => this.setState({ contextRef })
  render() {
    const { contextRef } = this.state
    return (
      <div className="container-main" ref={this.handleContextRef}>>
        <Container>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={11} style={{ paddingRight: '3.5rem' }}>
                <HomeMainContainer />
              </Grid.Column>
              <Grid.Column width={5} style={{ paddingLeft: '1.0rem' }}>
                <Sticky context={contextRef} offset={100} pushing>
                  <HomeSideContainer />
                </Sticky>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }

}

export default HomeContainer
