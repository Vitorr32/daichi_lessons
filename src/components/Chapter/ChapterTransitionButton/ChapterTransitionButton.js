import React from 'react';

import { Link } from 'react-router-dom';

import './ChapterTransitionButton.css';

export default ({ show, left, chapter }) => {
    if (!show) {
        return null;
    }

    return (
        <Link to={`/daichi/${chapter.number}`}
            className={`chapter_transition_button ${left ? 'left' : 'right'}`}>
            <span className="label">Chapter</span>
            <span className="number">{chapter.number}</span>
            <span className="title">{chapter.title}</span>
        </Link>
    )
}