import React, { Component } from 'react';
import './search-result.styles.scss'

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            food_name: '',
            imageUrl: '',
            serving_qty: '',
            grams: '',
            calories: '',
            mealTime: ''
        }
    }
  

    componentDidMount() {
        console.log("PROPS", this.props)
        let { food_name, serving_qty, serving_weight_grams, nf_calories, photo } = this.props.selectedItemInfo

        this.setState({
            food_name: food_name,
            imageUrl: photo.thumb,
            serving_qty: serving_qty,
            grams: Math.round(serving_weight_grams),
            calories: Math.round(nf_calories)
        })
    }

    componentDidUpdate() {
        console.log("testing", this.state)
    }

    render() { 
        let { food_name, imageUrl, serving_qty, grams, calories } = this.state;
        return (  
            <div className="selected-result-container">
                <div className="item-header">
                    <img className="image" src={imageUrl} alt='item'/>
                    <p>{food_name}</p>
                </div>
                <div>
                    <div className="serving-container">
                        <div>
                            <p>Servings</p>
                            <p>{serving_qty}</p>
                        </div>
                    </div>

                    <div className ="grams-calories-container">
                        <div className="grams">
                            <span>{grams}</span>
                            <span>grams</span>
                        </div>
                        <div className="calories">
                            <span>{calories}</span>
                            <span>calories</span>
                        </div>
                    </div>

                    <div className="meal-time-container">
                        <span>ADD TO TODAY</span>
                    </div>

                    <div className="button-container">
                        <button>ADD</button>
                    </div>

                </div>
                <div>

                </div>
          </div>
        );
    }
}
 
export default SearchResult;