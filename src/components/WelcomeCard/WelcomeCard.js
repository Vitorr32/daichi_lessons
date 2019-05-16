import React from 'react';
import { Link } from 'react-router-dom';

import './WelcomeCard.css';

export default (props) => {
    return (
        <Link to={props.path} className="welcome_card">
            <div className="header" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${props.background})` }}>
                {/* <img className="background" src={props.background} alt="" /> */}

            </div>
            <div className="content">
                <h1 className="title">{props.title}</h1>
                <h3 className="subtitle">{props.subtitle}</h3>
                <p className="description">{props.description}</p>
            </div>
        </Link>
    )
}