import React from 'react';
import './food-item-branded.styles.scss'

const FoodItembranded = ({ imageUrl, itemName, brandName }) => { 
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>
            <div className='food-info'>
                <span>{itemName}</span>
                <span>{brandName}</span>
            </div>
        </div>
    );
};


export default FoodItembranded;