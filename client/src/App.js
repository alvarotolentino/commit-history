import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Commit from './pages/Commit';

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <MenuBar></MenuBar>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/commit/:id' component={Commit}></Route>
        </Container>
      </Router>
    );
  }
}

export default App;
