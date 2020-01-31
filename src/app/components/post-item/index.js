import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostItem extends Component {

  render(){
    const imagePath = process.env.PUBLIC_URL + '/images/' + this.props.post.img;
    const imageStyle = {
      backgroundImage: `url(${imagePath})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }

    return (
      <div onClick={this.renderFullText} className={`grid-item-${this.props.post.id}`} style={imageStyle}>
        <div className="grid-item--mask"></div>
        <Link to={`/posts/${this.props.post.id}`}>
          {this.props.post.name}
        </Link>
      </div>
    )
  }


  renderFullText(){
    return alert('test')
  }
}

export default PostItem;
