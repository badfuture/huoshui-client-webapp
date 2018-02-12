import localStore from 'store'

const getUserInfo = () => localStore.get('user')

module.exports = {
  isReviewLiked: (reviewId) => {
    let isLiked = false
    const user = getUserInfo()
    if (!user) {
      return false
    }
    const likedReviews = user.LikedReviews
    const matches = likedReviews.filter(review => review.id == reviewId)
    isLiked = !!(matches.length !== 0)
    return isLiked
  },

  isReviewDisliked: (reviewId) => {
    let isDisliked = false
    const user = getUserInfo()
    if (!user) {
      return false
    }
    const dislikedReviews = user.DislikedReviews
    const matches = dislikedReviews.filter(review => review.id == reviewId)
    isDisliked = !!(matches.length !== 0)
    return isDisliked
  },
}
