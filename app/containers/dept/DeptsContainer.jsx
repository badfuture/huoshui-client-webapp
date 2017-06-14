import React from 'react'
import { Container } from 'semantic-ui-react'
import GridDept from '../../components/grid/GridDept'

const DeptsContainer = props => (
  <div className="container-main-grey">
    <Container>
      <GridDept {...props} />
    </Container>
  </div>
)

export default DeptsContainer
