import React, { Component } from 'react';
import reducers from './reducers';
//Routers
import {BrowserRouter as Router, Route} from 'react-router-dom';
//Redux 
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
//components
import SearchBar from './components/SearchBar/SearchBar';
import AllCarousel from './components/AllCarousels/AllCarousel';
import Login from './components/auth/login';
import Logout from './components/auth/logout';
import Signup from './components/auth/signup';
import Home from './components/Home/Home'

import dummyData from './dummy-data';

import './App.css';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {
  constructor(){
    super();
    this.state={
      data:dummyData,
    }
  }
  render() {
    return (
      <Provider  store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
      <Router>
      <div className="App">
        <Route path='/' component= {Home} exact/>
        <Route path='/login' component= {Login} exact/>
        <Route path='/logout' component= {Logout}/>
        <Route path='/signup' component= {Signup}/>
        {/* <SearchBar data={this.state.data}/>
        <AllCarousel data={this.state.data}/> */}
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
