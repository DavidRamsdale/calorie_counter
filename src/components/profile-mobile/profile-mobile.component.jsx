import React from 'react';

import image from '../../assests/jane.jpeg'

import './profile-mobile.styles.scss'

const Profile = ({ height, weight, first_name, last_name }) => (
    <div className="mobile-profile">
        <div className="picture-container">
            <img className="profile-image" src={image} alt="user_pic" />
            <span>{first_name}</span>
        </div>
        <div className="info-container">
            <div className="circle">
                <span>{height}</span>
                <span className="units">cm</span>
            </div>
            <div className="circle">
                <span>{height}</span>
                <span className="units">cm</span>
            </div>                  
        </div>
    </div>
);

export default Profile;
