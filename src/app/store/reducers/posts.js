import { FILTER_POSTS, SET_POSTS, SET_CURRENT_POST } from '../actions/action_creators'

const initialState = {
  allPosts: [],
  filteredPosts: [],
  currentPost: {},
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {

    case FILTER_POSTS :

      let filtered;

      if(!action.query.length){
        filtered = state.allPosts;
      } else {
        filtered = state.allPosts.filter( post => {
          return post.name.includes(action.query)
        } );
      }

      return {
        ...state,
        filteredPosts: filtered,
      }

    case SET_POSTS :

      return {
        allPosts: action.posts,
        filteredPosts: action.posts,
      }

    case SET_CURRENT_POST :

      const current = state.allPosts.find( post => post.id == action.id);

      return {
        ...state,
        currentPost: current,
      }

    default:
      return state;

  }
}

export default postsReducer;