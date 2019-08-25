import React from 'react';
import './food-item-branded.styles.scss'

const FoodItembranded = ({ imageUrl, itemName, brandName }) => { 
    return(
        <div className='food-item'>
            <div className='image-container'>
                <img className="image" src={imageUrl} alt='item'/>
            </div>
            <div className='food-info'>
                <span>{itemName}</span>
                <span className="brand-name">{brandName}</span>
            </div>
        </div>
    );
};


export default FoodItembranded;