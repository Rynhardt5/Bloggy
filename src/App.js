import React, { Component } from 'react';
import { Navbar } from './_components/layout';
import { Segment } from 'semantic-ui-react';
import './app.css';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Segment>{this.props.children}</Segment>
      </>
    );
  }
}

export default App;
