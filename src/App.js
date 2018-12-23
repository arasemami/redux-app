import React, { Component } from 'react';
import logo from './logo.svg';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';
import Posts from './components/posts';
import PostForm from './components/postForms';


 

class App extends Component {


  render() {
    return (
      <Provider store={store}>
          <div className="App">
            <h1>WLCOME TO MY aPP</h1>
              <PostForm />
              <hr />
              <Posts />
          </div>
      </Provider>
    );
  }
}

export default App;
