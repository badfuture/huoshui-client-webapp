import React, { Component } from "react";
import { connect } from "react-redux";
import FormFeedback from "../../components/form/FormFeedback";
import * as feedbackActions from "../../actions/feedbackActions";

class FeedbackFormContainer extends Component {
  render() {
    return <FormFeedback {...this.props} />;
  }
}

// map redux states to prop
const mapStateToProps = state => ({
  feedback: state.feedback,
  isFetching: state.feedback.isFetching,
  sendSuccess: state.feedback.sendSuccess
});

// map redux actions to prop
const mapActionToProps = dispatch => ({
  submitFeedback: feedback => dispatch(feedbackActions.submitFeedback(feedback))
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(FeedbackFormContainer);
