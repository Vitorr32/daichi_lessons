import React, { Component } from 'react';
import { createMarkup } from '../../../../../utils/functions';

import './Slides.css';

export default class Slides extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slideshow: 0
        }
    }

    render() {
        const { chapter } = this.props;
        return (
            <div className="slides">
                <div className="content">
                    <p className="description" dangerouslySetInnerHTML={createMarkup(chapter.grammar[this.state.slideshow].summary)} />
                    <h1 className="example" dangerouslySetInnerHTML={createMarkup(chapter.grammar[this.state.slideshow].examples[0].japanese)} />
                </div>
                <div className="selector_wrapper">
                    {
                        chapter.grammar.map((_, index) => {
                            return <button
                                key={`selector_${index}`}
                                className={`selector ${this.state.slideshow === index ? 'selected' : ''}`}
                                onClick={() => this.setState({ slideshow: index })} />
                        })
                    }
                </div>
            </div>
        );
    }
}