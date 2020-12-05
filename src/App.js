import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-primary flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="/"
          >
            Color Tokens
          </a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-white"><span id="account">0x0</span></small>
            </li>
          </ul>
        </nav>

        <div className="container-fluid mt-5">
          <h1>Color Tokens</h1>
        </div>
      </div>
    );
  }
}

export default App;
