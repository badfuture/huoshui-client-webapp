import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import HomeSideContent from '../../components/page/HomeSideContent'

class HomeSideContainer extends Component {

  constructor() {
    super()
    this.state = {
      isVisible: true,
    }
  }

  shake() {
    this.setState({ isVisible: !this.state.isVisible })
  }

  render() {
    return (
      <Container>
        <HomeSideContent
          shake={this.shake.bind(this)}
          {...this.state}
        />
      </Container>
    )
  }
}

export default HomeSideContainer
