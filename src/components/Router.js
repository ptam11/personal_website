import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './specific/Home';


class Router extends Component {
 render() {
   return (
     <BrowserRouter>
     
     <Home/>
      <Switch>
        
      </Switch>
     </BrowserRouter>
  )
 }
}

export default Router;