import React from 'react';

import Stripes from '../../assets/images/radial-stripes.svg';
import { Link } from 'react-router-dom';

import './Header.css';
import { addFuriganaAsHTML } from '../../utils/functions';

export default () => {
    return (
        <header>
            <div className="header_animation">
                <div className="wrapper">
                    <label className="flag">日本</label>
                    <img className="stripes rotating" src={Stripes} alt="" />
                </div>
            </div>
            <Link className="header_link" to={'/daichi'}> {addFuriganaAsHTML('大地', 'だいち')} </Link>
            <Link className="header_link" to={'/Renshuuchou'}>{addFuriganaAsHTML('練習帳', 'れんしゅうちょう')} </Link>
            <Link className="header_link" to={'/kanji'}>{addFuriganaAsHTML('漢字', 'かんじ')}</Link>
        </header>
    );
}