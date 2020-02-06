import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaAngleDoubleDown, FaSearch } from 'react-icons/fa';
import { filterPosts } from '../../store/actions/action_creators'

class Header extends Component {

  state = {
    inputValue: ''
  }

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
          <input
            type="text"
            className="input"
            value={this.state.inputValue}
            placeholder="Search..."
            onChange={(e) => this.setState({ inputValue: e.target.value})}
            onKeyDown={this.keyPressed}
          />
          <FaSearch className="nav-icon" onClick={() => this.props.search(this.state.inputValue)} />
        </div>
      </div>
    )
  }

  keyPressed = (event) => {
    if(event.key !== 'Enter'){
      return
    }
    this.props.search(this.state.inputValue)
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: (query) => dispatch(filterPosts(query)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);


