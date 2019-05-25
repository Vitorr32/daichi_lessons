import React from 'react';

import './DarkOverlay.css';
import { Spring } from 'react-spring/renderprops';

export default (props) => {
    return (
        <Spring
            from={{ opacity: props.opening ? 0 : 1 }}
            to={{ opacity: props.opening ? 1 : 0 }}
        >
            {
                props =>
                    <div className="overlay" style={props}>

                    </div>
            }
        </Spring>
    )

}