import React from 'react';

import { Link } from 'react-router-dom';

import './ChapterTransitionButton.css';

export default ({ show, target, left, chapter }) => {
    if (!show) {
        return null;
    }

    return (
        <Link to={target}
            className={`chapter_transition_button ${left ? 'left' : 'right'}`}>
            <span className="label">Chapter</span>
            <span className="number">{chapter.number}</span>
            <span className="title">{chapter.title}</span>
        </Link>
    )
}