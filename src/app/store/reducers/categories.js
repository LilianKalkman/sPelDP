import { SET_CURRENT_CATEGORY } from '../actions/categories';

const initialState = {
  categories: [
    {
      category: 'speld',
      color: 'green'
    },
    {
      category: 'test',
      color: 'purple'
    },
    {
      category: 'quotes',
      color: 'orange'
    }
  ],

  currentCategory: {
    category: 'speld',
    color: 'green'
  },
}
  ;

const categoriesReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_CURRENT_CATEGORY :

      return {
        ...state,
        currentCategory: action.category
      }

    default :
      return state;
  }
}

export default categoriesReducer;