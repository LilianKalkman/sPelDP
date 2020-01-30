import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostItem extends Component {

  render(){
    return (
      <div onClick={this.renderFullText}>
        <Link to={`/posts/${this.props.post.id}`}>
          {this.props.post.name}
        </Link>
      </div>
    )
  }


  renderFullText(){
    return alert('hallo')
  }
}

export default PostItem;
