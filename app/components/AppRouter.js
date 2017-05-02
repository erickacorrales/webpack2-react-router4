import React from 'react';
import About from './about/AboutPage';
import Home from './home/HomePage';
import { Route } from 'react-router-dom';
const AppRouter = () =>{
  return(
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  );
};

export default AppRouter;
