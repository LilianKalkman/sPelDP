import React, { Component } from 'react';
import Header from '../components/header';
import { connect } from 'react-redux';

class NotFound extends Component {

  render(){
    return (
      <div className={`${this.props.color}`}>
        <div className="not-found">
          Verdwaald.
          <button>Ga terug</button>
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