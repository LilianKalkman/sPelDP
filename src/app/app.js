import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostsGrid from './components/posts-grid';
import Header from './components/header';
import "../assets/scss/style.scss";
import { fetchPosts } from './store/actions/action_creators';

class App extends Component {

  state = {
    category: {
      category: 'speld',
      color: 'green'
    }
  };

  componentDidMount () {
    this.props.getPosts(this.state.category)
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.switchCategory(this.props.location.pathname);
    }
  }

  render() {
    return (
      <div className={`${this.state.category.color}`}>
        <Header />
        <PostsGrid category={this.state.category.category} />
      </div>
    );
  }

  switchCategory(path){
    const category = this.props.categories.find( cat => {
      return path.includes(cat.category);
    })
    this.setState(({category}))
    this.props.getPosts(category)
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (category) => dispatch(fetchPosts(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);