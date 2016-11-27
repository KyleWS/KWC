import React from 'react';
import {Navbar, Footer} from "./bars.js";
import '../css/main.css';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Navbar></Navbar>
        <main>
          {this.props.children}
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
