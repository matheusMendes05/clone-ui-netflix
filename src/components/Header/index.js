import React from 'react';
import './index.css';

export default ({ black }) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
            </div>
            <div className="header--user">
                <a>
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuario" />
                </a>
            </div>
        </header>
    );
}