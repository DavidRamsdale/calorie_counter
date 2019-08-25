import React from 'react';

import image from '../../assests/jane.jpeg'

import './profile.styles.scss'

const Profile = ({ height, weight, first_name, last_name }) => (
    <div className='profile-container' >
        <div className="profile-info">
            <div className="circle">
                <span>{weight}</span>
                <span className="units">kg</span>
            </div>
            <div className="image-container">
                <img className="profile-image" src={image} alt="user_pic" />
            </div>
            <div className="circle">
                <span>{height}</span>
                <span className="units">cm</span>
            </div>            
        </div>
        <div className="name">
            {first_name} {last_name}
        </div>
    </div>
);

export default Profile;
