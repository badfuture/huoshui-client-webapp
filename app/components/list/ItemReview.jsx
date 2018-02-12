import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'
import { Item, Label, Icon } from 'semantic-ui-react'
import UserUtil from '../../utils/UserUtil'
import { DOMAIN } from '../../constants/ApiEndpoints'
import * as authActions from '../../actions/authActions'

const classificationLabel = (val) => {
  let color = '#f7be17'
  if (val == '好评') {
    color = '#74b2e2'
  } else if (val == '差评') {
    color = '#bababc'
  }
  return (
    <span style={{ color, position: 'absolute', right: '2em', fontSize: '1em' }}>
      {`${val}`}
    </span>
  )
}

class ItemReview extends Component {
  state = {
    isLiked: false,
    isDisliked: false,
    upVote: 0,
    downVote: 0,
  }

  componentDidMount() {
    const review = this.props.review
    const isLiked = UserUtil.isReviewLiked(review.id)
    const isDisliked = UserUtil.isReviewDisliked(review.id)
    this.setState({
      isLiked,
      isDisliked,
      upVote: review.upVote,
      downVote: review.downVote,
    })
  }

  toggleLike = (e) => {
    e.stopPropagation()
    if (this.props.checkLoggedIn()) { return }
    if (this.state.isLiked) {
      this.unlikeReview()
    } else {
      this.likeReview()
    }
  }

  likeReview = () => {
    const LIKE_URL = `${DOMAIN}/users/${this.props.user.id}/liked_reviews`
    this.setState({
      isLiked: true,
      upVote: this.state.upVote + 1,
    })
    axios.put(LIKE_URL, {
      reviewId: this.props.review.id,
    })
    .then((resp) => {})
    .catch((err) => {
      this.setState({
        isLiked: false,
        upVote: this.state.upVote - 1,
      })
    })
  }

  unlikeReview = () => {
    const UNLIKE_URL = `${DOMAIN}/users/${this.props.user.id}/liked_reviews/${this.props.review.id}`
    this.setState({
      isLiked: false,
      upVote: this.state.upVote - 1,
    })
    axios.delete(UNLIKE_URL)
    .then((resp) => {})
    .catch((err) => {})
  }

  toggleDislike = (e) => {
    e.stopPropagation()
    if (this.props.checkLoggedIn()) { return }
    if (this.state.isDisliked) {
      this.undislikeReview()
    } else {
      this.dislikeReview()
    }
  }

  dislikeReview = () => {
    const DISLIKE_URL = `${DOMAIN}/users/${this.props.user.id}/disliked_reviews`
    this.setState({
      isDisliked: true,
      downVote: this.state.downVote + 1,
    })
    axios.put(DISLIKE_URL, {
      reviewId: this.props.review.id,
    })
    .then((resp) => {})
    .catch((err) => {
      this.setState({
        isDisliked: false,
        downVote: this.state.downVote - 1,
      })
    })
  }

  undislikeReview = () => {
    const UNLIKE_URL = `${DOMAIN}/users/${this.props.user.id}/disliked_reviews/${this.props.review.id}`
    this.setState({
      isDisliked: false,
      downVote: this.state.downVote - 1,
    })
    axios.delete(UNLIKE_URL)
    .then((resp) => {})
    .catch((err) => {
      this.setState({
        downVote: this.state.downVote + 1,
      })
    })
  }


  render() {
    const review = this.props.review
    const colorLiked = this.state.isLiked ? 'blue' : 'grey'
    const colorDisliked = this.state.isDisliked ? 'blue' : 'grey'

    return (
      <Item
        key={review.id}
        onClick={() => { this.props.history.push(`/reviews/${review.id}`) }}
        style={{ padding: '2em 0 1em 0' }}
      >

        <Item.Image size="mini" avatar src={review.Author.avatar} />
        <Item.Content>
          { (review.Course && this.props.showReviewTarget) &&
            <Item.Meta as="div" style={{ marginTop: '0em', marginBottom: '0.45em' }}>
              {`评 `}
              <Link style={{ color: '#37a' }} to={`/courses/${review.Course.id}`}>{review.Course.name}</Link>
            </Item.Meta>
          }
          <Item.Meta as="div" style={{ marginTop: '0em', marginBottom: '0.65em' }}>
            {`${review.Author.username}, `}
            {(review.Author.Dept && review.Author.firstYear) &&
              <span>
                {`${review.Author.Dept.shortname}-${review.Author.firstYear}, `}
              </span>
            }
            <span style={{ marginLeft: '0px' }}>{`${moment(review.createdAt).fromNow()}`}</span>
            {review.classification && classificationLabel(review.classification)}
          </Item.Meta>
          <Item.Description style={{ margin: '0px' }}>
            <span>{review.text}</span>
          </Item.Description>
          <Item.Extra>
            <div style={{ marginTop: '1em' }}>
              <Label content={`专业：${review.professional}`} style={{ backgroundColor: 'rgba(232, 232, 232, 0)' }} />
              <Label content={`表达：${review.expressive}`} style={{ backgroundColor: 'rgba(232, 232, 232, 0)' }} />
              <Label content={`友好：${review.kind}`} style={{ backgroundColor: 'rgba(232, 232, 232, 0)' }} />
              {review.Tags && review.Tags.map(tag => (
                <Label
                  key={tag.id}
                  as="span" basic
                  style={{ backgroundColor: 'rgba(77, 157, 217, 0.78)', color: 'white' }}
                >{tag.name}</Label>
              ))}
              <span
                onClick={(e) => {
                  e.stopPropagation()
                }}
                style={{ float: 'right', padding: '8px' }}
              >
                <span onClick={this.toggleLike}>
                  <Icon name="thumbs outline up" size="small" color={colorLiked} />{this.state.upVote}
                </span>
                &nbsp;&nbsp;&nbsp;
                <span onClick={this.toggleDislike}>
                  <Icon name="thumbs outline down" size="small" color={colorDisliked} />{this.state.downVote}
                </span>
              </span>
            </div>

          </Item.Extra>
        </Item.Content>
      </Item>
    )
  }
}

// map redux states to prop
const mapStateToProps = state => ({
  user: state.auth.user,
})

// map redux actions to prop
const mapActionToProps = dispatch => ({
  checkLoggedIn: () => dispatch(authActions.checkLoggedIn()),
})

export default connect(mapStateToProps, mapActionToProps)(ItemReview)
