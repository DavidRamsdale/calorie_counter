import React, { Component } from 'react';
import './calorie-meter.styles.scss'

class CarlorieMeter extends Component {
    
    render() { 
        let { intake_list } = this.props;
        console.log("intake", intake_list)
        const reduced_list = intake_list.reduce((meals, item) => {
            const {Breakfast = 0, Lunch = 0, Dinner = 0, Snack = 0} = meals;
            if (item.meal_type === 'breakfast') {
                return {...meals, Breakfast: Breakfast + Math.round(item.nf_calories) * item.serving_qty};
            } else if (item.meal_type === 'lunch') {
                return {...meals, Lunch: Lunch + Math.round(item.nf_calories) * item.serving_qty};
            } else if (item.meal_type === 'dinner') {
                return {...meals, Dinner: Dinner + Math.round(item.nf_calories) * item.serving_qty};
            } else if (item.meal_type === 'snack') {
                return {...meals, Snack: Snack + Math.round(item.nf_calories) * item.serving_qty};
            } 
        }, {});

        console.log(reduced_list)
        return (  
                <div className='calorie-container' >
                <div className='colorie-consumed'>
                    <div>
                        <span>
                        { 
                            Object.keys(reduced_list).reduce((sum,key)=>sum+parseFloat(reduced_list[key]||0),0)
                        }
                        </span>
                        <span>consumed</span>
                    </div>
                    <div>
                        <span>1500 cal</span>
                        <span>daily goal</span>
                    </div>
                </div>
                <div className='meter'>

                </div>

                <div className="meal-type-container">
                    <div className="meal-type">
                        <span>{reduced_list.Breakfast}</span>
                        <span>Breakfast</span>
                    </div>
                    <div className="meal-type">
                        <span>{reduced_list.Lunch}</span>
                        <span>Lunch</span>
                    </div>
                    <div className="meal-type">
                        <span>{reduced_list.Dinner}</span>
                        <span>Dinner</span>
                    </div>
                    <div className="meal-type">
                        <span>{reduced_list.Snack}</span>
                        <span>Snack</span>
                    </div>
                </div>


            </div>
        );
    }
}
 
export default CarlorieMeter;
