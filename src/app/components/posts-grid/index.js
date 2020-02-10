import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostItem from '../post-item/index';

class PostsGrid extends Component {

  render() {
    return (
      <div className="posts-grid">
        {

          this.props.posts.map( post => {
            return <PostItem key={`${post.id}-${post.name}`} post={post}/>
          })

        }


      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(PostsGrid);

