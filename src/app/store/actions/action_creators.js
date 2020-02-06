export const FILTER_POSTS = 'FILTER_POSTS';

export const filterPosts = (query) => {
  return {
    type: FILTER_POSTS,
    query: query
  }
}