import React from 'react';

import { Link } from 'react-router-dom';

import './Header.css';

export default () => {
    return (
        <header>
            <Link to={'/daichi'}>
                <h1>大地</h1>
                <label>Daichi</label>
            </Link>
            <Link to={'/Renshuuchou'}>
                <h1>練習帳</h1>
                <label>Renshuu-chou</label>
            </Link>
            <Link to={'/kanji'}>
                <h1>漢字</h1>
                <label>Kanji</label>
            </Link>
        </header>
    );
}