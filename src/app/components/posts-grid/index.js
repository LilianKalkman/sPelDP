import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostGridItem from '../post-grid-item/index';
import { fetchPosts } from '../../store/actions/posts';

class PostsGrid extends Component {

  render() {
    return (
      <div className="posts-grid">

        {

          this.props.posts.map( post => {
            return <PostGridItem key={`${post.id}-${post.name}`} post={post} category={this.props.category}/>
          })

        }

      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.filteredPosts,
    category: state.categories.currentCategory
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (category) => dispatch(fetchPosts(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsGrid);

