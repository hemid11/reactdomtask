import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import ClientLayout from './ClientLayout';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={AdminLayout} />
        <Route path="/" component={ClientLayout} />
      </Switch>
    </Router>
  );
}

export default App;
