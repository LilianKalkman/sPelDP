import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../post-item/index';

class PostsGrid extends Component {

  render() {
    return (
      <div>
        Posts Grid:

        {

          this.props.posts.map( post => {
            return <Post post={post} />
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

// lifecycle methods voor je render, alle zelfgemaakte functies eronder