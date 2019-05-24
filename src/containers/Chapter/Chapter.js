import React, { Component } from 'react';

import chapters from '../../assets/content/chapters';
import Header from '../../components/Header/Header';
import { Redirect } from 'react-router-dom';

import './Chapter.css';
import ChapterTransitionButton from '../../components/ChapterTransitionButton/ChapterTransitionButton';

export default class Chapter extends Component {

    getChapter() {
        const chapter_number = this.props.match.params.chapter;
        if (!chapter_number) {
            return null;
        }
        return chapters.find(chapter => chapter.number === chapter_number);
    }

    createMarkup(content) {
        return { __html: content };
    }

    nextChapter() {

    }

    previousChapter() {

    }

    render() {
        const chapter = this.getChapter();

        //If chapter number is not in the query params or the chapter don't exist, redirect to daichi page.
        if (!chapter) {
            return <Redirect to='/daichi' />
        }

        return (
            <main id="chapter">
                <Header />
                <div className="chapter_content_wrapper">
                    <div className="chapter_header background" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${chapter.background})` }}>
                        <ChapterTransitionButton chapter={parseInt(chapter.number, 10) - 1} action={this.nextChapter} left />
                        <ChapterTransitionButton chapter={parseInt(chapter.number, 10) + 1} action={this.previousChapter} right />
                        <h2 className="chapter">Chapter {chapter.number}</h2>
                        <h1 className="title">{chapter.title}</h1>

                    </div>

                    <div className="chapter_content">
                        {
                            chapter.grammar.map(rule => {
                                return (
                                    <div>
                                        <h1 className="title">{rule.title}</h1>
                                        <p className="summary">{rule.summary}</p>
                                        {
                                            rule.examples.map(example => {
                                                return (
                                                    <div className="example">
                                                        <h2 className="japanese" dangerouslySetInnerHTML={this.createMarkup(example.japanese)} />
                                                        <h4 className="english">{example.english}</h4>
                                                        <p className="explanation" dangerouslySetInnerHTML={this.createMarkup(example.explanation)} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </main>
        );
    }
}