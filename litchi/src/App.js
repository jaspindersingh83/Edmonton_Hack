import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar'
import AllCarousel from './components/AllCarousels/AllCarousel'
import dummyData from './dummy-data'

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      data:dummyData,
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBar data={this.state.data}/>
        <AllCarousel data={this.state.data}/>
      </div>
    );
  }
}

export default App;
