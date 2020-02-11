import React, { Component } from 'react';
import { setCurrentPost, fetchPosts } from '../../store/actions/posts'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class ItemOverview extends Component {

  render(){
    const {postId, posts} = this.props
    const post = posts.find((currentPost) => Number(currentPost.id) === Number(postId))
    const imagePath = process.env.PUBLIC_URL + '/images/' + post.img;

    return (
      <div className="item-overview">
        <img src={imagePath} alt="" className="item-overview__img"/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.allPosts,
    post: state.posts.currentPost,
    category: state.categories.currentCategory,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (postId) => dispatch(setCurrentPost(postId)),
    getPosts: (category) => dispatch(fetchPosts(category)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemOverview));