import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Ancienne from './pages/Ancienne'
import Navigation from './components/Navigation'


const App = () => {
  return (
    <Router>
        <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Alliance" component={Ancienne} />
            <Route path="/404" component={NotFound} />
          </Switch>
    </Router>

  );
}

export default App;
