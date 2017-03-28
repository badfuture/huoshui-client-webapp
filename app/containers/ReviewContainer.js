import React from 'react'
import { Dropdown, Input, Container} from 'semantic-ui-react'

const options = [
  { key: 'page', text: 'This Page', value: 'page' },
  { key: 'org', text: 'This Organization', value: 'org' },
  { key: 'site', text: 'Entire Site', value: 'site' },
]

const InputExampleActionDropdown = () => (
  <Input
    action={<Dropdown basic floating options={options} defaultValue='page' />}
    icon='search'
    iconPosition='left'
    placeholder='Search...'
  />
)


class ReviewContainer extends React.Component {
  render(){
    return (
      <div>
        <Container>
          {InputExampleActionDropdown()}
        </Container>

      </div>
    )
  }
}

export default ReviewContainer
