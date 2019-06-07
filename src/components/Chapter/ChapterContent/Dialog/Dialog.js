import React from 'react';

import { createMarkup } from '../../../../utils/functions';

import './Dialog.css';

export default ({ dialog }) => (
    <div className="example">
        {dialog.conversation.map((phrase, index) => {
            return (
                <div className="dialog" key={`dialog_${index}`}>
                    <span className="actor">{isNaN(phrase.actor) ? phrase.actor : dialog.actors[phrase.actor]} : </span>
                    <span className="speech" dangerouslySetInnerHTML={createMarkup(phrase.speech)} />
                </div>
            );
        })}
        <p className="explanation" dangerouslySetInnerHTML={createMarkup(dialog.explanation)} />
    </div>
)