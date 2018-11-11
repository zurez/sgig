import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/header';
import SearchBar from './components/search_bar';
import ActionScreen from './components/action_screen';
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SearchBar/>
        <ActionScreen/>
      </div>
    );
  }
}

export default App;
