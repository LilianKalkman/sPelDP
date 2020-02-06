export const FILTER_POSTS = 'FILTER_POSTS';
export const SET_POSTS = 'SET_POSTS';

export const filterPosts = (query) => {
  return {
    type: FILTER_POSTS,
    query: query
  }
}

export const setPosts = (category) => {
  return {
    type: SET_POSTS,
    category: category
  }
}