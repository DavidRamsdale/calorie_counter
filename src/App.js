import React, { Component } from 'react';

import SearchBox from './components/search-box/searchbox.component';
import SearcResults from './components/search-result/search-result.component';
import ItemCollection from './components/food-item-list/food-item-list.component';
import CarlorieMeter from './components/calorie-meter/calorie-meter.component';
import Profile from './components/profile/profile.component';

import MockData from './mock_data/mockData.json';

import './App.scss';

class App extends Component {
  constructor(){
    super();

    this.state = { 
      intake_list: [],
      searchField: '',
      selectedItemInfo: '',
      date: 'Today'
    }

    this.handleOnclick = this.handleOnclick.bind(this);
  }

  componentDidMount() {
    this.setState({ intake_list: MockData.data_points[0].intake_list })
  }

  onChangeDate(arrow) {
    if(arrow === "left") {
      if(this.state.date === "Today"){
        this.setState({ intake_list: MockData.data_points[1].intake_list, date: "One day ago" })
      } else if (this.state.date === "One day ago") {
        this.setState({ intake_list: MockData.data_points[2].intake_list, date: "Two days ago" })
      }
    }

    if(arrow === "right") {
      if(this.state.date === "Two days ago"){
        this.setState({ intake_list: MockData.data_points[1].intake_list, date: "One day ago" })
      } else if (this.state.date === "One day ago") {
        this.setState({ intake_list: MockData.data_points[0].intake_list, date: "Today" })
      }
    }
    
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

  handleCloseButton = () => {
    this.setState({ selectedItemInfo: '' })
  }

  handleAddButton = (info) => {

    this.setState({ 
      intake_list: this.state.intake_list.concat(info),
      selectedItemInfo: ''
    })
  }

  render() {
    let { selectedItemInfo, intake_list, date } = this.state;
    return ( 
      <div className="App">
        <div className="header">
          <div className="container">
            <SearchBox handleOnclick={this.handleOnclick} />
            <div className="date-container">
              <i onClick={() => this.onChangeDate("left")} className="fas fa-chevron-left"></i>
              <h2>{date}</h2>
              <i onClick={() => this.onChangeDate("right")} className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div className="content-container">
          <div className="user-info">
            <div className="profile">
              <Profile 
                height={MockData.height_cm} 
                weight={MockData.weight_kg} 
                first_name={MockData.first_name} 
                last_name={MockData.last_name}
              />
            </div>
            <div className="calories-info">
              <CarlorieMeter intake_list={intake_list} />
            </div>
          </div>
          <div className="item-list">
            <ItemCollection intake_list={intake_list} />
          </div>
        </div>
        { 
          selectedItemInfo ? 
          <SearcResults selectedItemInfo={selectedItemInfo} handleAddButton={this.handleAddButton} handleCloseButton={this.handleCloseButton}/> :
          null
        }
      </div>
     );
  }
}
 
export default App;


