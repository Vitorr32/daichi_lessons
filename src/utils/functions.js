import React from 'react';

export const addFurigana = (word, furigana) => `<span class="furigana" furigana=${furigana}>${word}</span>`
export const addFuriganaAsHTML = (word, furigana, elementClass = '') => <span className={`furigana ${elementClass}`} furigana={furigana}>{word}</span>