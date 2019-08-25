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
            thumb: '',
            serving_qty: '',
            serving_weight_grams: '',
            nf_calories: '',
            meal_type: 'breakfast',
            serving_unit: ''
        }
    this.IncrementItem = this.IncrementItem.bind(this);
    this.DecreaseItem = this.DecreaseItem.bind(this);
    }
    

    componentDidMount() {
        let { food_name, serving_qty, serving_weight_grams, nf_calories, photo, serving_unit } = this.props.selectedItemInfo

        this.setState({
            food_name: food_name,
            thumb: photo.thumb,
            serving_qty: serving_qty,
            serving_weight_grams: Math.round(serving_weight_grams),
            nf_calories: Math.round(nf_calories),
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
        let { food_name, thumb, serving_qty, serving_weight_grams, nf_calories } = this.state;
        let { handleAddButton, handleCloseButton } = this.props;
        const options = ["breakfast", "lunch", "dinner", "snack"]
        return (
            <div className="wrapper">
                 <div className="selected-result-container">
                
                <div className="item-header">
                    <div className="image-container">
                        <img className="image" src={thumb} alt='item'/>
                        <p>{food_name}</p>
                    </div>
                    <div onClick={handleCloseButton} className="escape-container">
                        <i class="fas fa-times"></i>
                    </div>
                </div>

                <div className="item-info-container"> 
                    <div className="serving-container">
                        <div className="measurements">
                            <div className="serving-info">
                                <span className="text">Servings</span>
                                <span>{serving_qty}</span>
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
                        <span id="slice">slice</span>
                    </div>

                    <div className ="grams-calories-container">
                        <div className="grams">
                            <span className="number">{serving_weight_grams}</span>
                            <span className="text">grams</span>
                        </div>
                        <div className="calories">
                            <span className="number">{nf_calories}</span>
                            <span className="text">calories</span>
                        </div>
                    </div>
                </div>
                <div className="meal-type-container">
                    <span>ADD TO TODAY</span>
                    <Dropdown options={options} onChange={this.DropdownSelection} value={this.state.meal_type} placeholder="Select an option" />
                </div>

                <div className="button-container">
                    <button onClick={() => handleAddButton(this.state)}>ADD</button>
                </div>
                <div>

                </div>
          </div>
            </div>  
        );
    }
}
 
export default SearchResult;