import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Profile from './pages/Profile';
import Alert from './components/Alert';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Alert text="Just a test" type='warning' />
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/profile/:name' component={Profile} />
          <Route path='/' exact component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
