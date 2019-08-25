import React, { Component } from 'react';
import './calorie-meter.styles.scss'

class CarlorieMeter extends Component {
    
    render() { 
        const { intake_list } = this.props;
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

        const total_calories = Object.keys(reduced_list).reduce((sum,key)=>sum+parseFloat(reduced_list[key]||0),0);

        const percent_goal = (total_calories / 1500) * 100;
 
        return (  
                <div className='calorie-container' >
                <div className='colorie-consumed'>
                    <div className="consumed"> 
                        <span className="calories">
                        { 
                           total_calories
                        } cal
                        </span>
                        <span className="meter-text">consumed</span>
                    </div>
                    <div className="goal">
                        <span className="calories">1500 cal</span>
                        <span className="meter-text">daily goal</span>
                    </div>
                </div>
                <div className="meter">
                    <span className="percentage-bar" style={{width: `${percent_goal}%`}}></span>
                    <span className="percetage-number" style={{width: `${percent_goal}%`}}>{Math.round(percent_goal)}%</span>
                    
                </div>

                <div className="meal-type-container">
                    <div className="meal-type">
                        <span className="meal-type-number">{reduced_list.Breakfast ? reduced_list.Breakfast: 0 }</span>
                        <span className="meter-text">Breakfast</span>
                    </div>
                    <div className="meal-type">
                        <span className="meal-type-number">{reduced_list.Lunch ? reduced_list.Lunch : 0}</span>
                        <span className="meter-text">Lunch</span>
                    </div>
                    <div className="meal-type">
                        <span className="meal-type-number">{reduced_list.Dinner ? reduced_list.Dinner: 0}</span>
                        <span className="meter-text">Dinner</span>
                    </div>
                    <div className="meal-type">
                        <span className="meal-type-number">{reduced_list.Snack ? reduced_list.Snack: 0}</span>
                        <span className="meter-text">Snack</span>
                    </div>
                </div>


            </div>
        );
    }
}
 
export default CarlorieMeter;
