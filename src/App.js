import React, { Component } from 'react';

import SearchBox from './components/search-box/searchbox.component';
import SearcResults from './components/search-result/search-result.component';
import ItemCollection from './components/food-item-list/food-item-list.component';

import './App.scss';

class App extends Component {
  constructor(){
    super();

    this.state = { 
      intake_list: [],
      searchField: '',
      selectedItemInfo: ''
    }

    this.handleOnclick = this.handleOnclick.bind(this);
  }

  componentDidUpdate() {
    console.log(this.state.intake_list)
  }

  handleOnclick(itemInfo, type) {

    if(type === "common") {
      fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
                "x-app-id": "2bcf6229",
                "x-app-key": "d4efdf23e2d7a23625755139954a6080"
              },
              body: JSON.stringify({
                query: itemInfo
              })
            })
            .then(res =>res.json())
            .then(data => this.setState({ selectedItemInfo: data.foods[0] }));
    }

    if(type === "branded") {
      fetch(`https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${itemInfo}`, {
              method: "GET",
              headers: {
                "x-app-id": "2bcf6229",
                "x-app-key": "d4efdf23e2d7a23625755139954a6080"
              },
            })
            .then(res =>res.json())
            .then(data => this.setState({ selectedItemInfo: data.foods[0] }));
    }
  }

  handleAddButton = (info) => {
    console.log("info", info)
    this.setState({ 
      intake_list: this.state.intake_list.concat(info),
      selectedItemInfo: ''
    })
  }

  render() {
    let { selectedItemInfo, intake_list } = this.state;
    return ( 
      <div className="App">
        <div className="header">
          <div className="container">
            <SearchBox handleOnclick={this.handleOnclick} />
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
            <ItemCollection intake_list={intake_list} />
          </div>
        </div>
        { 
          selectedItemInfo ? 
          <SearcResults selectedItemInfo={selectedItemInfo} handleAddButton={this.handleAddButton}/> :
          null
        }
      </div>
     );
  }
}
 
export default App;


