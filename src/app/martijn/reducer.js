
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
  ]
};

const categoriesReducer = (state = initialState) => {
  return state
}

export default categoriesReducer;