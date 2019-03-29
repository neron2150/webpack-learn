import { Component } from 'react';
import React from 'react';
import './App.css';
import css from './App.css';

console.log(css);

class App extends Component{
  render() {
    return (
      <div className={css.purple}>Hello, i'm react</div>
    );
  }
}
export default App;
