import React, { Component } from 'react';
import reducers from './reducers';
//Routers
import {BrowserRouter as Router, Route} from 'react-router-dom';
//Redux 
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';

//components
import AllCarousel from './components/AllCarousels/AllCarousel';
import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout';
import Signup from './components/Auth/Signup';
import Forgotpassword from './components/Auth/Forgotpassword';
import Resetpassword from './components/Auth/Reset';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Fbtoken from './components/Auth/Fbtoken';
import Watch from './components/Watch/Watch';


import './App.css';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise,ReduxThunk)(createStore);

class App extends Component {

  render() {
    return (
      <Provider  store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <Router>
          <div className="App">
            <Route path='/' component= {Home} exact/>
            <Route path='/login' component= {Login} exact/>
            <Route path='/logout' component= {Logout}/>
            <Route path='/forgotpassword' component={Forgotpassword}/>
            <Route path='/reset' component={Resetpassword}/>
            <Route path='/signup' component= {Signup}/>
            <Route path='/admin' component= {Admin}/>
            <Route path='/genres' component= {AllCarousel}/>
            <Route path='/token' component= {Fbtoken}/>
            <Route path='/watch' component={Watch}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
