import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Header extends Component
{
    render()
    {
        return (

            <header className="header">
               <Link to='/'><img className="header__logo" src='/Assets/Icons/BrainFlixLogo.svg' alt='Logo' /></Link>
                <form className ="search">
                    <input type="text" name="textInput"/>
                    <button className = "search__button"><img src='/Assets/Icons/Search.svg' alt='search' /></button>
                </form>
                <Link to='/Upload'><img className="header__upload" src='/Assets/Icons/ContentUpload.svg' alt='upload' /></Link>
                <img className="header__profilePic" src='/Assets/Images/john_gibbons.jpg' alt='profile-pic' />
            </header>
        )
    }
}

export default Header