import React from 'react';

import './ChapterTransitionButton';

export default (props) => {
    console.log(props);
    return (
        <div className="transition_button" style={{ float: props.left ? 'left' : 'right' }}>
            <span>{props.chapter}</span>
            <button>Yolo</button>
        </div>
    )
}