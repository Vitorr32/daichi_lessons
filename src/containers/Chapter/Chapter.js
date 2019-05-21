import React, { Component } from 'react';

import chapters from '../../assets/content/chapters';
import Header from '../../components/Header/Header';
import { Redirect } from 'react-router-dom';

import './Chapter.css';

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

    render() {
        const chapter = this.getChapter();

        //If chapter number is not in the query params or the chapter don't exist, redirect to daichi page.
        if (!chapter) {
            return <Redirect to='/daichi' />
        }

        return (
            <main>
                <Header />
                <h1>{chapter.title}</h1>
                <h3>{chapter.sub_title}</h3>
                <label>Chapter {chapter.number}</label>

                <div className="chapter_content">
                    {
                        chapter.grammar.map(rule => {
                            return (
                                <div>
                                    <h1>{rule.title}</h1>
                                    <h3>{rule.sub_title}</h3>
                                    <p>{rule.summary}</p>
                                    {
                                        rule.examples.map(example => {
                                            return (
                                                <div className="example">
                                                    <h2 dangerouslySetInnerHTML={this.createMarkup(example.japanese)} />
                                                    <h4 >{example.english}</h4>
                                                    <p dangerouslySetInnerHTML={this.createMarkup(example.explanation)} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </main>
        );
    }
}