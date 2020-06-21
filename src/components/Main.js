import React from 'react';
import {
  // BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const Main = () => {
  return (
    <>
      {/* <Router> */}
      <Switch>
        <Route exact strict path='/'>
          <Redirect to='/home' />
        </Route>
        <Route exact strict path='/home' component={Home} />
        <Route exact strict path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch>
      {/* </Router> */}
    </>
  );
};

export default Main;
