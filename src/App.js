import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/header';
import SearchBar from './components/search_bar';
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SearchBar/>
      </div>
    );
  }
}

export default App;
