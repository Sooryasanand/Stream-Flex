import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css';
import logo from './Image/favicon.ico';

function Nav() {
const [show, handleshow] = useState(false);
const navigate = useNavigate();

const transitionNavBar = () => {
    if(window.scrollY > 100) {
        handleshow(true);
    } else {
        handleshow(false);
    }
}

useEffect(() => {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener('scroll', transitionNavBar)
}, [])


    return (
        <div className={`nav ${show && 'nav_bg'}`}>
            <div className='nav_contents'>
                <img className='nav_logo' onClick={() => navigate('/')} src={logo} alt="logo" />
                <img onClick={() => navigate('/profile')} className='nav_avatar' src="https://streamflexmisc.s3.ap-south-1.amazonaws.com/profilePic/profilePicBlue.png" />
            </div>
        </div>
    )
}

export default Nav;
