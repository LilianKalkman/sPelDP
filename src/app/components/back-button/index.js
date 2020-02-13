import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaArrowLeft } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';

class BackButton extends Component {

  render(){
    return (
      <button className="back-button" onClick={() => { this.props.history.go(-1)}}>
        <FaArrowLeft className="back-button__icon" />
      </button>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    color: state.categories.currentCategory.color,
  }
}

export default withRouter(connect(mapStateToProps)(BackButton));
