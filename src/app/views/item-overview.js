import React, { Component } from 'react';
import Header from '../components/header';
import ItemOverview from '../components/item-overview';

class OverviewPage extends Component {

  render(){
    return (
      <div className="item-overview-page">
        <Header />
        <ItemOverview />
      </div>
    )
  }
}

export default OverviewPage;