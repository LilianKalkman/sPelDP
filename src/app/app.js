import React from 'react';
import PostsGrid from './components/posts-grid';
import Header from './components/header'
import "../assets/scss/style.scss";

function App() {
  return (
    <div className="">
      <Header />
      <PostsGrid />
    </div>
  );
}

export default App;