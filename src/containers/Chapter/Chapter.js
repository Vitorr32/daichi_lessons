import React, { Component } from 'react';

import chapters from '../../assets/content/chapters';
import Header from '../../components/Header/Header';
import * as Scroll from 'react-scroll';
import { Redirect } from 'react-router-dom';

import GrammarTransitionButton from '../../components/Chapter/GrammarTransitionButton/GrammarTransitionButton';
import ChapterTransitionButton from '../../components/Chapter/ChapterTransitionButton/ChapterTransitionButton';
import { Transition, config } from 'react-spring/renderprops';

import './Chapter.css';
import ChapterContent from '../../components/Chapter/ChapterContent/ChapterContent';

export default class Chapter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chapter: null,
            grammar: null,
            rules: [],
            fowardAnimation: true
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

    renderPageRules(grammar) {
        //Needed for smooth transition
        this.setState({
            rules: grammar.map(rule => ({ style }) => <ChapterContent style={style} grammar={rule} />)
        })
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
            grammar: grammarIndex
        }, this.renderPageRules(chapter.grammar))
    }

    getChapterFromNumber(number, offset = 0) {
        return chapters.find(chapter => parseInt(chapter.number, 10) === parseInt(number) + offset);
    }

    hasAfter(number, chapters) {
        return chapters.length - 1 > chapters.findIndex(chapter => parseInt(chapter.number, 10) === parseInt(number));
    }

    hasBefore(number, chapters) {
        return 0 < chapters.findIndex(chapter => parseInt(chapter.number, 10) === parseInt(number));
    }

    nextChapter() {

    }

    previousChapter() {

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
                        <ChapterTransitionButton
                            show={this.hasBefore(chapter.number, chapters)}
                            target={`/daichi/${parseInt(chapter.number, 10) - 1}`}
                            chapter={this.getChapterFromNumber(chapter.number, -1)}
                            action={this.nextChapter} left />
                        <ChapterTransitionButton
                            show={this.hasAfter(chapter.number, chapters)}
                            target={`/daichi/${parseInt(chapter.number, 10) + 1}`}
                            chapter={this.getChapterFromNumber(chapter.number, 1)}
                            action={this.previousChapter} right />
                        <h2 className="chapter">Chapter {chapter.number}</h2>
                        <h1 className="title">{chapter.title}</h1>
                    </div>
                    <Transition
                        items={grammar}
                        keys={grammar.title}
                        from={{ transform: `translateX(${this.state.fowardAnimation ? '100%' : "-100%"})`, opacity: 0 }}
                        enter={{ transform: 'translateX(0%)', opacity: 1 }}
                        leave={{ transform: `translateX(${this.state.fowardAnimation ? '-100%' : "100%"})`, opacity: 0, position: 'absolute', top: '0px' }}
                        config={config.stiff}
                    >
                        {index => props => {
                            const Content = this.state.rules[index];
                            return <Content style={props} />
                        }}
                    </Transition>
                    <div className="grammar_nav">
                        <GrammarTransitionButton
                            show={(this.props.match.params.grammar || 0) > 0}
                            grammar={chapter.grammar[parseInt(this.props.match.params.grammar || 0) - 1]}
                            target={`/daichi/${chapter.number}/${parseInt(this.props.match.params.grammar || 0) - 1}`}
                            animationSetter={() => this.setState({ fowardAnimation: false })} left />
                        <GrammarTransitionButton
                            show={(this.props.match.params.grammar || 0) < chapter.grammar.length - 1}
                            grammar={chapter.grammar[parseInt(this.props.match.params.grammar || 0) + 1]}
                            target={`/daichi/${chapter.number}/${parseInt(this.props.match.params.grammar || 0) + 1}`}
                            animationSetter={() => this.setState({ fowardAnimation: true })} />
                    </div>
                </div>
            </main >
        );
    }
}