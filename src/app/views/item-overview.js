import React, { Component } from 'react';
import Header from '../components/header';
import ItemOverview from '../components/item-overview';
import { setCurrentPost } from '../store/actions/action_creators';
import { connect } from 'react-redux';

class OverviewPage extends Component {

  componentDidMount () {
    this.props.getPost(this.props.match.params.postId);
    console.log('component did mount')
  }

  render(){
    return (
      <div className="item-overview-page">
        <Header />
        <ItemOverview />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.posts.currentPost
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (postId) => dispatch(setCurrentPost(postId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewPage);