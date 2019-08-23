import React from 'react';
import './food-item-common.styles.scss'

const FoodItemCommon = ({ imageUrl, name }) => { 
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>
            <span className='name'>{name}</span>
        </div>
    );
};


export default FoodItemCommon;