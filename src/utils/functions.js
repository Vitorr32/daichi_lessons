import React from 'react';
import DOMPurify from 'dompurify';

export const addFurigana = (word, furigana) => `<ruby>${word}<rt>${furigana}</rt></ruby>`
export const addFuriganaAsHTML = (word, furigana, elementClass = '') => <ruby className={elementClass}>{word}<rt>{furigana}</rt></ruby>
export const createMarkup = content => ({ __html: DOMPurify.sanitize(content) })