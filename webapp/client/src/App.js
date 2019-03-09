import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <div>
              <Switch>
                <Route exact path="/" render={(props) => <div>something</div>} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
