import { speldData } from '../../../api/speldData';
import { FILTER_POSTS, SET_POSTS } from '../actions/action_creators'

const initialState = {
  allPosts: speldData,
  filteredPosts: speldData,
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

      // nog naar kijken; structuur niet handig

      const postsCategory = state.allPosts.filter( post => {
        return post.category === action.category;
      })

      return {
        ...state,
        allPosts: postsCategory,
      }

    default:
      return state;

  }
}

export default postsReducer;