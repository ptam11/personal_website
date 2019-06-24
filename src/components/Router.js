import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './common/NavBar';
import Timeline from './specific/Timeline';


class Router extends Component {
 render() {
   return (
     <BrowserRouter>
     <NavBar/>
     <Timeline/>
      <Switch>
        
      </Switch>
     </BrowserRouter>
  )
 }
}

export default Router;