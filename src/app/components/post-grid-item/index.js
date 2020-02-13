import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { connect } from 'react-redux';

class PostGridItem extends Component {

  render(){
    const imagePath = process.env.PUBLIC_URL + '/images/' + this.props.post.img;
    const imageStyle = {
      backgroundImage: `url(${imagePath})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }

    let gridClass;
    if(!this.props.filterIds){
      gridClass = this.props.post.id;
    } else {
      gridClass = this.getGridClassname(this.props.post.id) + 1;
    }

    const itemClasses = classNames('grid-item', `grid-item-${gridClass}`)

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

  getGridClassname(id){
    return this.props.filterIds.findIndex( i => i === id);
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.allPosts,
    category: state.categories.currentCategory.category,
    filterIds: state.posts.filteredPosts
  }
}

export default connect(mapStateToProps)(PostGridItem);
