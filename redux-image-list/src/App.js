import React, { Component } from 'react';
import './App.css';
import ImageList from './ImageList';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddImage from './AddImage';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Switch>
        <Route path='/' exact component={ImageList}/>
        <Route path='/new' exact component={AddImage}/>
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
