import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostsGrid from './components/posts-grid';
import Header from './components/header';
import "../assets/scss/style.scss";
import { fetchPosts } from './store/actions/posts';
import { setCurrentCategory } from './store/actions/categories'

class App extends Component {

  componentDidMount () {
    this.props.setCategory(this.props.category)
    this.props.getPosts(this.props.category)
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      console.log('component did update')
      this.switchCategory(this.props.location.pathname);
    }
  }

  render() {
    return (
      <div className={`${this.props.color}`}>
        <Header />
        <PostsGrid />
      </div>
    );
  }

  switchCategory(path){
    console.log('in switch category')
    const category = this.props.categories.find( cat => {
      return path.includes(cat.category);
    })
    this.props.setCategory(category)
    this.props.getPosts(category)
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    category: state.categories.currentCategory,
    color: state.categories.currentCategory.color,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (category) => dispatch(fetchPosts(category)),
    setCategory: (category) => dispatch(setCurrentCategory(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);