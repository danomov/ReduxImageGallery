import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddImage from './Components/AddImage';
import EditImage from './Components/EditImage';
import ModalWrappedImageList from './Components/withModal';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Switch>
        <Route path='/' exact component={ModalWrappedImageList}/>
        <Route path='/new' exact component={AddImage}/>
        <Route path='/edit/:id' exact component={EditImage}/>
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
