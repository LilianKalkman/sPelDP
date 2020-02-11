import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostsGrid from './components/posts-grid';
import Header from './components/header';
import "../assets/scss/style.scss";
import { fetchPosts } from './store/actions/posts';
import { setCurrentCategory } from './store/actions/categories'

class App extends Component {

  componentDidMount () {
    this.props.getPosts(this.props.category);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      // console.log(this.props.match.params.category, 'did update');
      this.switchCategory(this.props.match.params.category);
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

  switchCategory(category){
    const newCategory = this.props.categories.find( cat => {
      return cat.category === category;
    })
    this.props.setCategory(newCategory)
    this.props.getPosts(newCategory)
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