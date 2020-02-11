import React, { Component } from 'react';
import Header from '../components/header';
import ItemOverview from '../components/item-overview';
import { connect } from 'react-redux';

class OverviewPage extends Component {

  render(){
    return (
      <div className={`${this.props.color}`}>
        <Header />
        <ItemOverview postId={this.props.match.params.postId} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    color: state.categories.currentCategory.color,
  }
}

export default connect(mapStateToProps)(OverviewPage);