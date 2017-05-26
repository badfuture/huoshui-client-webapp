import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardProf = props => (
  <Card centered>
    <Image src="../../images/sample/sample5.png" />
    <Card.Content>
      <Card.Header>
        {props.name}&nbsp;
        {props.gender === 'male' && <Icon name="man" color="blue" />}
        {props.gender === 'female' && <Icon name="woman" color="pink" />}
      </Card.Header>
      <Card.Meta>
        <span>
          {
            (props.Depts && props.Depts[0]) ? <span> {props.Depts[0].shortname},&nbsp; </span> : ''
          }{(props.School) && props.School.name}
        </span>
      </Card.Meta>
      <Card.Description>
        {props.motto}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        0 人关注
      </a>
    </Card.Content>
  </Card>
)

export default CardProf
