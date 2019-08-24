
import React, { Component } from 'react';
import FoodItemCommon from '../food-item-common/food-item-common.component';
import FoodItemBranded from '../food-item-branded/food-item-branded.component';
import './searchbox.styles.scss'

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            foodData: null,
        }
    }

    componentDidUpdate() {

    }

    handleChange = (e) => {
        if(e.target.value){
            fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${e.target.value}`, {
              method: "GET",
              headers: {
                "x-app-id": "2bcf6229",
                "x-app-key": "d4efdf23e2d7a23625755139954a6080"
              }
            })
            .then(res =>res.json())
            .then(data => this.setState({ foodData: data }));
        } else {
            this.setState({ foodData: null })
        }
    }

    render() { 
        let { foodData } = this.state;
        let { handleOnclick } = this.props
        return ( 
            <div className="searchbox-container">
                <input
                    className="search"
                    type='search' 
                    placeholder="Search foods..." 
                    onChange={this.handleChange} 
                />
                { foodData ? 
                    <div className="food-results">
                        <div className="common">
                            <h3>Common</h3>
                            { 
                                foodData.common.slice(0,4).map( foodItem =>
                                    <div key={foodItem.food_name} onClick={() => handleOnclick(foodItem.food_name, "common")}> 
                                        <FoodItemCommon 
                                            key={foodItem.food_name} 
                                            imageUrl={foodItem.photo.thumb} 
                                            name={foodItem.food_name}
                                            onClick={() => this.onClickTest(foodItem.food_name)}
                                        />
                                    </div>
                                )
                            }
                        </div>
                        <div className="branded">
                            <h3>Branded</h3>
                            { 
                                
                                foodData.branded.slice(0,3).map( foodItem => 
                                    <div key={foodItem.nix_item_id} onClick={() => handleOnclick(foodItem.nix_item_id, "branded")}> 
                                        <FoodItemBranded 
                                            key={foodItem.food_name} 
                                            imageUrl={foodItem.photo.thumb} 
                                            itemName={foodItem.brand_name_item_name}
                                            brandName={foodItem.brand_name}
                                        />
                                    </div>
                                )
                            }
                        </div>
                    </div>
    
                : null}
            </div>            
        );
    }
}
 
export default SearchBox;