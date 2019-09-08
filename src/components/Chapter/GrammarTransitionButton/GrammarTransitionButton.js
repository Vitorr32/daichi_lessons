import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

import './GrammarTransitionButton.css';
import { createMarkup } from '../../../utils/functions';

export default props => {
  if (!props.show) {
    return null;
  }

  return (
    <Link
      to={props.target}
      className={`grammar_transition_button ${props.left ? 'left' : 'right'}`}
      onClick={props.animationSetter}
    >
      <div className='texts'>
        <span
          dangerouslySetInnerHTML={createMarkup(props.grammar.title)}
          className='title'
        />
        <span className='label'>
          {props.left ? 'Previous grammar' : 'Next grammar'}
        </span>
      </div>
      <FontAwesomeIcon
        className='icon'
        icon={props.left ? faChevronLeft : faChevronRight}
      />
    </Link>
  );
};
