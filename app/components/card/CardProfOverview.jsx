import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import * as ProfActions from '../../actions/profActions'

const followButton = props => (
  <Button
    onClick={() => {
      props.likeProf(props.id)
    }}
    basic content="加关注" size="tiny"
    color="blue"
  />
)

const unfollowButton = props => (
  <Button
    onClick={() => {
      props.unlikeProf(props.id)
    }}
    content="已关注" size="tiny"
    color="blue"
  />
)

class CardProfOverview extends Component {
  handleFollowProf() {
    this.props.likeProf(this.props.id)
  }

  render() {
    const imgSrc = '/images/avatar/whale.png'
    const props = this.props
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
            <div>
              {
                (props.Depts && props.Depts[0]) ? <span> {props.Depts[0].shortname},&nbsp; </span> : ''
              }{(props.School) && props.School.name}
            </div>
            <div style={{ marginTop: '0.3em' }} >
              <Icon name="user" /> {props.followerCount} 人关注
            </div>
          </Card.Meta>
          <Card.Description>
            {props.motto}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {!props.isProfFollowed && followButton(props)}
          {props.isProfFollowed && unfollowButton(props)}
        </Card.Content>
      </Card>
    )
  }
}
// map redux states to prop
const mapStateToProps = state => ({
  isProfFollowed: state.prof.isProfFollowed,
  followerCount: state.prof.followerCount,
})

// map redux actions to prop
const mapActionToProps = dispatch => ({
  likeProf: profId => dispatch(ProfActions.likeProf(profId)),
  unlikeProf: profId => dispatch(ProfActions.unlikeProf(profId)),
})

export default connect(mapStateToProps, mapActionToProps)(CardProfOverview)
