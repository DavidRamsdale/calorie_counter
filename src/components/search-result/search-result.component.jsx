import React, { Component } from 'react';
import './search-result.styles.scss';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            food_name: '',
            imageUrl: '',
            serving_qty: '',
            grams: '',
            calories: '',
            meal_type: 'Breakfast',
            serving_unit: ''
        }
    this.IncrementItem = this.IncrementItem.bind(this);
    this.DecreaseItem = this.DecreaseItem.bind(this);
    }
    

    componentDidMount() {
        let { food_name, serving_qty, serving_weight_grams, nf_calories, photo, serving_unit } = this.props.selectedItemInfo

        this.setState({
            food_name: food_name,
            imageUrl: photo.thumb,
            serving_qty: serving_qty,
            grams: Math.round(serving_weight_grams),
            calories: Math.round(nf_calories),
            serving_unit: serving_unit
        })
    }

    componentDidUpdate() {
        console.log("testing", this.state)
    }

    IncrementItem = () => {
        this.setState({ 
            serving_qty: this.state.serving_qty + 1,
         });
    } 

    DecreaseItem = () => {
        if(this.state.serving_qty > 0){
            this.setState({ 
                serving_qty: this.state.serving_qty - 1,
            });
        }
    }

    DropdownSelection = (selection) => {
        this.setState({ meal_type: selection.value });
    }

    render() { 
        let { food_name, imageUrl, serving_qty, grams, calories } = this.state;
        let { handleAddButton } = this.props;
        const options = ["Breakfast", "Dinner"]
        const defaultOption = options[0]
        return (  
            <div className="selected-result-container">
                <div className="item-header">
                    <img className="image" src={imageUrl} alt='item'/>
                    <p>{food_name}</p>
                </div>
                <div className="item-info-container"> 
                    <div className="serving-container">
                        <div className="serving-info">
                            <p>Servings</p>
                            <p>{serving_qty}</p>
                        </div>

                        <div className="arrows">
                            <div onClick={() => this.IncrementItem()} >
                                <i className="fas fa-chevron-up"></i>
                            </div>
                            <div onClick={() => this.DecreaseItem()}>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                        </div>
                    </div>

                    <div className ="grams-calories-container">
                        <div className="grams">
                            <span className="number">{grams}</span>
                            <span className="text">grams</span>
                        </div>
                        <div className="calories">
                            <span className="number">{calories}</span>
                            <span className="text">calories</span>
                        </div>
                    </div>
                </div>
                <div className="meal-time-container">
                    <span>ADD TO TODAY</span>
                    <Dropdown options={options} onChange={this.DropdownSelection} value={defaultOption} placeholder="Select an option" />
                </div>

                <div className="button-container">
                    <button onClick={() => handleAddButton(this.state)}>ADD</button>
                </div>
                <div>

                </div>
          </div>
        );
    }
}
 
export default SearchResult;