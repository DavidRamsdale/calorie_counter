import React, { Component } from 'react';
import './calorie-meter.styles.scss'

class CarlorieMeter extends Component {
    
    render() { 
        const { intake_list } = this.props
        console.log(intake_list)

        const reduced_list = intake_list.reduce((meals, item) => {
            const {Breakfast = 0, Lunch = 0, Dinner = 0, Snack = 0} = meals;
            if (item.meal_type === 'Breakfast') {
                return {...meals, Breakfast: Breakfast + item.calories * item.serving_qty};
            } else if (item.meal_type === 'Lunch') {
                return {...meals, Lunch: Lunch + item.calories * item.serving_qty};
            } else if (item.meal_type === 'Dinner') {
                return {...meals, Dinner: Dinner + item.calories * item.serving_qty};
            } else if (item.meal_type === 'Snack') {
                return {...meals, Snack: Snack + item.calories * item.serving_qty};
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

                    </div>
                    <div className="meal-type">
                    
                    </div>
                    <div className="meal-type">
                    
                    </div>
                    <div className="meal-type">
                    
                    </div>
                </div>


            </div>
        );
    }
}
 
export default CarlorieMeter;
