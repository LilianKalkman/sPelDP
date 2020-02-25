import { connect } from 'react-redux'
import * as Selectors from './selectors'

export const withCategories = connect(
  (state, props) => {
    return {
      categories: Selectors.getCategories(state, props)
    }
  }
)
export const withFilteredCategories = connect(
  (state, props) => {
    return {
      categories: Selectors.getFilteredCategories(state, props)
    }
  }
)
export const withCategory = connect({
  category: Selectors.getCategory
})

/*
1) high order components
2) selectors
2b) library -> reselect = library voor selector hergebruik
 */