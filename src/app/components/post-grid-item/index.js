import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class PostGridItem extends Component {

  render(){
    const imagePath = process.env.PUBLIC_URL + '/images/' + this.props.post.img;
    const imageStyle = {
      backgroundImage: `url(${imagePath})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }

    const itemClasses = classNames('grid-item', `grid-item-${this.props.post.id}`)

    return (
      <Link to={`/${this.props.category}/posts/${this.props.post.id}`} className={itemClasses} style={imageStyle}>
        <div className="grid-item--mask"></div>
        <div className="grid-item--stripe"></div>
        <div className="post-title">
          <div className="post-title__link">
            {this.props.post.name}
          </div>
        </div>
      </Link>
    )
  }
}

export default PostGridItem;
