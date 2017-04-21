import React, { PropTypes } from 'react'
import { Card, Header, Image, Divider } from 'semantic-ui-react'
import Rating from '../rating/RatingBasic'

const propTypes = {
  name: PropTypes.string.isRequired,
  intro: PropTypes.string,
  email: PropTypes.string,
  research: PropTypes.string,
  onClickHandler: PropTypes.func,
}

const defaultProps = {
  intro: '',
  email: '',
  research: '',
  onClickHandler: () => {},
}

const CardProfDetail = props => (
  <Card fluid style={{ boxShadow: 'none' }} onClick={props.onClickHandler}>
    <Card.Content>
      <Image floated="left" size="mini" src="/images/sample/sample6.png" />
      <Card.Header>
        <Header as="h4">
          老师：{props.name}
        </Header>
      </Card.Header>
      <Card.Meta>
        <Rating />
      </Card.Meta>
      <Card.Description>
        简介：{props.intro}
        <Divider hidden />
        研究：{props.research}
        联系方式：{props.email}
      </Card.Description>
    </Card.Content>
  </Card>
)


// props validation
CardProfDetail.propTypes = propTypes
CardProfDetail.defaultProps = defaultProps

export default CardProfDetail
