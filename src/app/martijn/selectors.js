export function getState(state, props) {
  return state.martijnCategories
}

export function getCategories(state, props) {
  return getState(state, props).categories
}

export function getFilteredCategories(state, props) {
  const categories = getCategories(state, props)
  return categories.filter(category => category.category.indexOf(props.filter))
}
export function getCategory(state, props) {
  const categories = getCategories(state, props)
  return categories.find(category => category.category === props.id)
}