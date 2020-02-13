import { FILTER_POSTS, SET_POSTS } from '../actions/posts'

const initialState = {
  allPosts: [],
  filteredPosts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {

    case FILTER_POSTS :

      const filtered = state.allPosts.filter( post => {
        return post.name.includes(action.query)
      } );

      let filterIds = [];
      filtered.forEach( post => filterIds.push(post.id))

      return {
        ...state,
        filteredPosts: filterIds,
      }

    case SET_POSTS :

      return {
        allPosts: action.posts
      }

    default:
      return state;

  }
}

export default postsReducer;