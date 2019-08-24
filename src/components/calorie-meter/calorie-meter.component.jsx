import React from 'react';

const CarlorieMeter = ({ intake_list }) => (
    <div className='calorie-container' >
        <div className='colorie-consumed'>
            <div>
                <span></span>
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

export default CarlorieMeter;