import React, { Component } from 'react';
import { connect } from 'react-redux';

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
  }
}

export default connect(mapStateToProps)(ItemOverview);