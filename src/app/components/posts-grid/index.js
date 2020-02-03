import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostGridItem from '../post-grid-item/index';

class PostsGrid extends Component {

  render() {
    return (
      <div className="posts-grid">
        {

          this.props.posts.map( post => {
            return <PostGridItem key={`${post.id}-${post.name}`} post={post}/>
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

