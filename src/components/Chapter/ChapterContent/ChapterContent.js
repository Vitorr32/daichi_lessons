import React from 'react';

import Dialog from './Dialog/Dialog';
import { createMarkup } from '../../../utils/functions';
import Extra from './Extra/Extra';

import './ChapterContent.css';

export default ({ style, grammar }) => (
  <div className='chapter_content' style={style}>
    <h1 dangerouslySetInnerHTML={createMarkup(grammar.title)} />
    <p
      className='summary'
      dangerouslySetInnerHTML={createMarkup(grammar.summary)}
    />
    {grammar.examples.map((example, index) => {
      return example.dialog ? (
        <Dialog dialog={example} key={`example_${index}`} />
      ) : (
        <div key={`example_${index}`} className='example'>
          <h2
            className='japanese'
            dangerouslySetInnerHTML={createMarkup(example.japanese)}
          />
          {example.english ? (
            <h4 className='english'>{example.english}</h4>
          ) : null}
          <p
            className='explanation'
            dangerouslySetInnerHTML={createMarkup(example.explanation)}
          />
        </div>
      );
    })}
    <Extra extra={grammar.extra} />
  </div>
);
