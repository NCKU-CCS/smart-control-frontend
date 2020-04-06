import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// style
import ResetStyle from '../src/theme/ResetStyles';
import GlobalStyle from '../src/theme/GlobalStyles';
// components
import Home from './components/home';
import Login from './components/login';
import Sensing from './components/sensing';
import Setting from './components/setting';
import DR from './components/dr';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/sensing' component={Sensing} />
          <Route path='/setting' component={Setting} />
          <Route path='/dr' component={DR} />
          <Route path='/' exact component={Home} />
        </Switch>
      </div>
      <ResetStyle />
      <GlobalStyle />
    </Router>
    
  );
}

export default App;