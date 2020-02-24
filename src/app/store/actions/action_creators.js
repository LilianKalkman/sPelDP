import { speldData } from '../../../api/speldData';
import { testData } from '../../../api/testData';
import { quotesData } from '../../../api/quotesData'

export const FILTER_POSTS = 'FILTER_POSTS';
export const SET_POSTS = 'SET_POSTS';

export const filterPosts = (query) => {
  return {
    type: FILTER_POSTS,
    query: query
  }
}

export const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    posts: posts
  }
}

export const fetchPosts = (category) => {
  //  fetch posts for category (later async van maken en call maken naar api obv category)

  let posts;
  if(category.category === 'speld'){
    posts = speldData;
  }

  if(category.category === 'test'){
    posts = testData;
  }

  if(category.category === 'quotes'){
    posts = quotesData
  }

  return function(dispatch) {
    return dispatch(setPosts(posts))
  }
}