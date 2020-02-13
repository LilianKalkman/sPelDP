import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemOverview extends Component {

  render(){
    const {postId, posts} = this.props
    const post = posts.find((currentPost) => Number(currentPost.id) === Number(postId))
    const imagePath = process.env.PUBLIC_URL + '/images/' + post.img;

    return (
      <div className="item-overview__wrapper">
        <div className="item-overview">
          <img src={imagePath} alt="" className="item-overview__img"/>
          {/*<h1 className="item-overview__title">{post.name}</h1>*/}
          <div className="item-overview__content">
            {
              post.subtitle && <h2 className="item-overview__subtitle">{post.subtitle}</h2>
            }
            <div className="item-overview__text">{post.text}</div>
          </div>
          {
            post.author && <div className="item-overview__author">{post.author}</div>
          }
        </div>
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