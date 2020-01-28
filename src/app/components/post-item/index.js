import React, { Component } from 'react';

class Post extends Component {

  render(){
    return (
      <div>
        {this.props.post.name}
      </div>
    )
  }
}

export default Post;