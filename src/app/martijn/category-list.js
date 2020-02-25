import React from 'react'

class CategoryList extends React.Component {
  static defaultProps = {
    categories: []
  }

  render() {
    const { categories } = this.props
    if (!categories || ! categories.length) {
      return null
    }
    return (
      <ul>
        {categories.map(category => (
          <li>{category.category} :: {category.color}</li>
        ))}
      </ul>
    )
  }
}

export default CategoryList

// hier zo min mogelijk logica, helemaal herbruikbaar maken, met elke verschillende state die je hebt. state en props als argument.