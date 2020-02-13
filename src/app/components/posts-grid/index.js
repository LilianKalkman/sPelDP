import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostGridItem from '../post-grid-item/index';

class PostsGrid extends Component {

  render() {
    let posts = [];
    if(!this.props.filterIds){
      posts = this.props.posts;
    } else {
      this.props.filterIds.forEach( id => {
        const matchPost = this.props.posts.find( post => post.id === id);
        posts.push(matchPost)
       });
    }

    return (
      <div className="posts-grid">

        {

          posts.map( post => {
            return <PostGridItem key={`${post.id}-${post.name}`} post={post} />
          })

        }

      </div>
    )
  }

}


const mapStateToProps = (state) => {
  return {
    posts: state.posts.allPosts,
    filterIds: state.posts.filteredPosts
  }
}

export default connect(mapStateToProps)(PostsGrid);

