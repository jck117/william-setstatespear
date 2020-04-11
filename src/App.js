//14.14 React Router
//App.js has a basic layout and uses the PoemListPage

import React, { Component } from 'react';
import PoemListPage from './PoemListPage'
import './App.css';
import { Route, Link } from 'react-router-dom';
import PoemPage from './PoemPage';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav>
          <Link to='/'>Poem List</Link>
        </nav>
        <header>
          <h1>William Setstatespear</h1>
        </header>
        <main>
          <Route 
            exact path='/'
            component={PoemListPage}
          />
          {/* To define part of the path as dynamic, we prefix 
          that part with a colon : (p. 24) */}
          <Route
            path='/poem/:poemId'
            component={ PoemPage }
          />
        </main>
        <footer>
          <p>© WilliamSetstatespear, 2018. All Rights Reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;




