import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class PostItem extends Component {

  render(){
    const imagePath = process.env.PUBLIC_URL + '/images/' + this.props.post.img;
    const imageStyle = {
      backgroundImage: `url(${imagePath})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }

    const itemClasses = classNames('grid-item', `grid-item-${this.props.post.id}`)

    return (
      <div onClick={this.renderFullText} className={itemClasses} style={imageStyle}>
        <div className="grid-item--mask"></div>
        <div className="grid-item--stripe"></div>
        <div className="post-title">
          <Link to={`/posts/${this.props.post.id}`}>
            {this.props.post.name}
          </Link>
        </div>
      </div>
    )
  }

  renderFullText(){
    return alert('test')
  }
}

export default PostItem;
