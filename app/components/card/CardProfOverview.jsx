import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardProf = (props) => {
  const imgSrc = '/images/avatar/whale.png'
  /*
  let imgSrc = ''
  if (props.gender === '男') {
    imgSrc = '/images/avatar/male.png'
  } else if (props.gender === '女') {
    imgSrc = '/images/avatar/female.jpg'
  } else {
    imgSrc = '/images/avatar/whale.png'
  }
  */
  return (
    <Card centered>
      <Image src={imgSrc} style={{ width: '100%' }} />

      <Card.Content>
        <Card.Header>
          {props.name}&nbsp;
          {props.gender === '男' && <Icon name="man" color="blue" />}
          {props.gender === '女' && <Icon name="woman" color="pink" />}
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
}

export default CardProf
