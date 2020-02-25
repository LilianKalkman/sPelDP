import React, { Component } from 'react';
import Header from '../components/header';
import { connect } from 'react-redux';
import CategoryList from '../martijn/category-list'

import {
  withCategories, withCategory,
  withFilteredCategories
} from '../martijn/containers'

const ConnectedCategoryList = withCategories(CategoryList)
const FilteredCategoryList = withFilteredCategories(CategoryList)

class NotFound extends Component {

  render(){
    return (
      <div className={`${this.props.color}`}>
        <div className="not-found">
          Verdwaald.
          <button>Ga terug</button>


          <CategoryList categories={[ { category: 'martijn', color: 'test'}]} />
          <ConnectedCategoryList />
          <FilteredCategoryList filter="te" />
          <ConnectedSingleCategory id="speld" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    color: state.categories.currentCategory.color,
  }
}

export default connect(mapStateToProps)(NotFound);


function SingleCategory({category}) {
  return (
    <div>
      <strong>{category.category}</strong>
      {category.color}
    </div>
  )
}

const ConnectedSingleCategory = withCategory(SingleCategory)