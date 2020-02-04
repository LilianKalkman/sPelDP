import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaAngleDoubleDown, FaSearch } from 'react-icons/fa';

class Header extends Component {

  render(){
    return (
      <div className="header">
        <div className="nav-bar">
          {
            this.props.categories.map( category => {
              return (
                <NavLink
                  to={`/${category.category}/posts`}
                  activeClassName="active"
                  className="nav-item"
                  key={`${category.category}`}
                >
                  { category.category }
                  <FaAngleDoubleDown className="nav-icon"/>
              </NavLink>
              )

            })
          }
        </div>
        <div className="search-bar">
          <input type="text" className="input" placeholder="Search..." />
          <FaSearch className="nav-icon"/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(Header);


