import React, { Component } from 'react';

import './ChapterCard.css';

export default class ChapterCard extends Component {
    constructor(props) {
        super(props);

        this.container = React.createRef()
    }

    callForModal(chapter, element) {
        const bounds = element.current.getBoundingClientRect();
        this.props.callForModal(chapter, bounds)
    }

    render() {
        const { number, title, sub_title, background } = this.props.chapter;
        return (
            <div className="chapter_card background"
                ref={this.container}
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${background})` }}
                onClick={() => this.callForModal(this.props.chapter, this.container)}>
                <div className="chapter_wrapper">
                    <legend>Chapter</legend>
                    <h1 className="chapter">{number}</h1>
                </div>
                <div className="header">
                    <h1 className="title">{title}</h1>
                    <h3 className="sub_title">{sub_title}</h3>
                </div>
            </div>
        );
    }
}