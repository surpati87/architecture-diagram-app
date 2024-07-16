import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DiagramForm from './components/DiagramForm';
import DiagramPreview from './components/DiagramPreview';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={DiagramForm} />
        <Route path="/preview" component={DiagramPreview} />
      </Switch>
    </Router>
  );
};

export default App;

