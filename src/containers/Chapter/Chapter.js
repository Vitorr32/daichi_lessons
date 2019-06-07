import React, { Component } from 'react';

import chapters from '../../assets/content/chapters';
import Header from '../../components/Header/Header';
import * as Scroll from 'react-scroll';
import { Redirect } from 'react-router-dom';

import GrammarTransitionButton from '../../components/Chapter/GrammarTransitionButton/GrammarTransitionButton';
import ChapterTransitionButton from '../../components/Chapter/ChapterTransitionButton/ChapterTransitionButton';
import { createMarkup } from '../../utils/functions';
import { Transition, config } from 'react-spring/renderprops';

import { EXTRA_CONTENT_SIMPLE_TABLE_TYPE, EXTRA_CONTENT_COMPOSITED_TABLE_TYPE } from '../../utils/constants';
import ExtraCompositedTable from '../../components/Chapter/ExtraCompositedTable/ExtraCompositedTable';

import './Chapter.css';

export default class Chapter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chapter: null,
            grammar: null
        }
    }

    componentWillMount() {
        this.getChapterFromParams(this.props.match.params.chapter, this.props.match.params.grammar);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match !== prevProps.match) {
            this.getChapterFromParams(this.props.match.params.chapter, this.props.match.params.grammar);
            Scroll.animateScroll.scrollToTop(100);
        }
    }

    getChapterFromParams(chapterIndex, grammarIndex = 0) {
        if (!chapterIndex) {
            return this.setState({ chapter: null, grammar: null });
        }

        const chapter = chapters.find(chapter => chapter.number === chapterIndex);
        //If the selected chapter has no grammar content
        if (chapter.grammar.length === 0) {
            return this.setState({ chapter, grammar: null });
        }

        //If the selected chapter number is above or under the actual number of grammar rules
        if (grammarIndex < 0 || grammarIndex >= chapter.grammar.length) {
            return this.setState({ chapter, grammar: null });
        }

        this.setState({
            chapter,
            grammar: chapter.grammar[grammarIndex]
        })
    }

    nextChapter() {

    }

    previousChapter() {

    }

    renderExtraContentForChapter(extras) {
        return extras.map((extra, index) => {
            switch (extra.type) {
                case EXTRA_CONTENT_SIMPLE_TABLE_TYPE:
                    return null//TODO
                case EXTRA_CONTENT_COMPOSITED_TABLE_TYPE:
                    return <ExtraCompositedTable key={`extra_${index}`} table={extra} />
                default:
                    console.error("Unknown extra type");
                    return null;
            }
        }).filter(extra => extra !== null);
    }

    renderDialog(dialog, key) {
        return (
            <div key={key} className="example">
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
        );
    }

    render() {
        const { chapter, grammar } = this.state;

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
                    <Transition
                        items={grammar}
                        keys={grammar.title}
                        from={{ transform: 'translateX(100%)', opacity: 0 }}
                        enter={{ transform: 'translateX(0%)', opacity: 1 }}
                        leave={{ transform: 'translateX(-100%)', opacity: 0, position: 'absolute', top: '0px' }}
                        config={config.slow}
                    >
                        {show => show && (props =>
                            <div className="chapter_content" style={props}>
                                <h1 className="title">{grammar.title}</h1>
                                <p className="summary" dangerouslySetInnerHTML={createMarkup(grammar.summary)} />
                                {
                                    grammar.examples.map((example, index) => {
                                        return (
                                            example.dialog
                                                ?
                                                this.renderDialog(example, `example_${index}`)
                                                :
                                                <div key={`example_${index}`} className="example">
                                                    <h2 className="japanese" dangerouslySetInnerHTML={createMarkup(example.japanese)} />
                                                    {example.english ? <h4 className="english">{example.english}</h4> : null}
                                                    <p className="explanation" dangerouslySetInnerHTML={createMarkup(example.explanation)} />
                                                </div>
                                        )
                                    })
                                }
                                {
                                    grammar.extra
                                        ?
                                        <span className="extra_title">Extras</span>
                                        :
                                        null
                                }
                                {
                                    grammar.extra
                                        ?
                                        this.renderExtraContentForChapter(grammar.extra)
                                        :
                                        null
                                }
                            </div>
                        )}
                    </Transition>
                    <div className="grammar_nav">
                        <GrammarTransitionButton
                            show={(this.props.match.params.grammar || 0) > 0}
                            grammar={chapter.grammar[parseInt(this.props.match.params.grammar || 0) - 1]}
                            target={`/daichi/${chapter.number}/${parseInt(this.props.match.params.grammar || 0) - 1}`} left />
                        <GrammarTransitionButton
                            show={(this.props.match.params.grammar || 0) < chapter.grammar.length - 1}
                            grammar={chapter.grammar[parseInt(this.props.match.params.grammar || 0) + 1]}
                            target={`/daichi/${chapter.number}/${parseInt(this.props.match.params.grammar || 0) + 1}`} />
                    </div>
                </div>
            </main >
        );
    }
}