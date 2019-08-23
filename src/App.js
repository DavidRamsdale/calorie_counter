import React, { Component } from 'react';
import SearchBox from './components/search-box/searchbox.component';
import './App.scss';

class App extends Component {
  constructor(){
    super();

    this.state = { 
      foodData: [],
      searchField: ''
    }

  }

  render() {
    return ( 
      <div className="App">
        <div className="header">
          <div className="container">
            <SearchBox />
            <h2>Today</h2>
          </div>
        </div>
        <div className="content-container">
          <div className="user-info">
            <div className="profile">
              profile
            </div>
            <div className="calories-info">
              calories
            </div>
          </div>
          <div className="item-list">
            list
          </div>
        </div>
      </div>
     );
  }
}
 
export default App;


