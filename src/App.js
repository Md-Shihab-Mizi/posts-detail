import React from 'react';
import './App.css';

import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import PostDetail from './Components/PostDetail/PostDetail';
import Header from './Components/Header/Header';


function App() {

  return (
    <div >
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/post/:postId">
            <PostDetail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
