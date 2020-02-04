import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleDoubleDown, FaSearch } from 'react-icons/fa';

class Header extends Component {

  render(){
    return (
      <div className="header">
        <div className="nav-bar">
          <NavLink
            to="/speld/posts"
            activeClassName="active"
            className="nav-item">
            Speld <FaAngleDoubleDown className="nav-icon"/>
          </NavLink>
          <NavLink to="/test/posts" className="nav-item">
            Test <FaAngleDoubleDown className="nav-icon"/>
          </NavLink>
        </div>
        <div className="search-bar">
          <input type="text" className="input" placeholder="Search..." />
          <FaSearch className="nav-icon"/>
        </div>
      </div>
    )
  }
}

export default Header;

