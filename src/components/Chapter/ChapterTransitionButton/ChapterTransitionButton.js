import React from 'react';

import { Link } from 'react-router-dom';

import './ChapterTransitionButton.css';
import { createMarkup } from '../../../utils/functions';

export default ({ show, left, chapter }) => {
  if (!show) {
    return null;
  }

  return (
    <Link
      to={`/daichi/${chapter.number}`}
      className={`chapter_transition_button ${left ? 'left' : 'right'}`}
    >
      <span className='label'>Chapter</span>
      <span className='number'>{chapter.number}</span>
      <span
        dangerouslySetInnerHTML={createMarkup(chapter.title)}
        className='title'
      />
    </Link>
  );
};
