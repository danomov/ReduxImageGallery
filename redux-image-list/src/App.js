import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddImage from './Components/Admin/AddImage';
import EditImage from './Components/Admin/EditImage';
import ModalWrappedImageList from './Components/Admin/withModal';
import Error from './Components/ErrorPage';
// import Home from './Guest/Home';
import Admin_SignIn from './Components/Admin/SignIn';
import PrivateRoute from './Components/PrivateRoute';
import ModalWrappedHomePage from './Guest/withModal';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Switch>
        <Route path='/' exact component={ModalWrappedHomePage}/>
        <Route path='/admin' exact component={Admin_SignIn}/>
        <PrivateRoute path='/admin/home' exact component={ModalWrappedImageList}/>
        <PrivateRoute path='/admin/new' exact component={AddImage}/>
        <PrivateRoute path='/admin/edit/:id' exact component={EditImage}/>
        <Route component={Error}/>
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
