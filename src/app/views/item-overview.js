import React, { Component } from 'react';
import Header from '../components/header';
import ItemOverview from '../components/item-overview';
import { setCurrentPost } from '../store/actions/posts';
import { connect } from 'react-redux';

class OverviewPage extends Component {

  componentDidMount () {
    this.props.getPost(this.props.match.params.postId);
    console.log('component did mount')
  }

  render(){


    return (
      <div className={`${this.props.color}`}>
        <Header />
        <ItemOverview />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.posts.currentPost,
    color: state.categories.currentCategory.color,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (postId) => dispatch(setCurrentPost(postId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewPage);