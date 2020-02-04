import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostsGrid from './components/posts-grid';
import Header from './components/header'
import "../assets/scss/style.scss";

class App extends Component {

  state = {
    category: {
      category: 'speld',
      color: 'green'
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.switchCategory(this.props.location.pathname);
    }
  }

  render() {
    return (
      <div className={`${this.state.category.color}`}>
        <Header />
        <PostsGrid />
      </div>
    );
  }

  switchCategory(path){
    const category = this.props.categories.find( cat => {
      return path.includes(cat.category);
    })
    this.setState(({category}))
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(App);