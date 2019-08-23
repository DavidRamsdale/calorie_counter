import React from 'react';
import './food-item-common.styles.scss'

const FoodItemCommon = ({ imageUrl, name }) => { 
    return(
        <div className='food-item'>
            <div className='image-container'>
                <img className="image" src={imageUrl} alt='item'/>
            </div>
            <span className='name'>{name}</span>
        </div>
    );
};


export default FoodItemCommon;