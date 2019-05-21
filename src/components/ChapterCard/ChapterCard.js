import React, { Component } from 'react';

import { Transition } from 'react-spring/renderprops';
import { Link } from 'react-router-dom';

import './ChapterCard.css';

export default class ChapterCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showContent: false
        }
    }
    render() {
        const { number, title, sub_title, description, background } = this.props;

        return (
            <Link className="chapter_card background"
                to={`/daichi/${number}`}
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${background})` }}
                onMouseEnter={() => this.setState({ showContent: true })}
                onMouseLeave={() => this.setState({ showContent: false })}>
                <div className="chapter_wrapper">
                    <legend>Chapter</legend>
                    <h1 className="chapter">{number}</h1>
                </div>
                <Transition
                    items={!this.state.showContent}
                    from={{ translate: 300 }}
                    enter={{ translate: 0 }}
                    leave={{ translate: 300 }}>
                    {
                        show => show && (props =>
                            <div style={{ transform: `translateX(${props.translate}px)` }} className="header">
                                <h1 className="title">{title}</h1>
                                <h3 className="sub_title">{sub_title}</h3>
                            </div>
                        )
                    }
                </Transition>

                <Transition
                    items={this.state.showContent}
                    from={{ translate: -300 }}
                    enter={{ translate: 0 }}
                    leave={{ translate: -300 }}>
                    {
                        show => show && (props =>
                            <div className="description" style={{ transform: `translateX(${props.translate}px)` }}>
                                <legend>{description}</legend>
                            </div>
                        )
                    }
                </Transition>
            </Link>
        );
    }
}

/* <Transition
                    items={this.state.showContent}
                    from={{ height: 0 }}
                    enter={{ height: 'auto' }}
                    leave={{ height: 0 }}>
                    {show => show && (props =>
                        <div className="content" style={{ ...props }}>
                            <Trail
                                items={content}
                                keys={item => item.title}
                                from={{ transform: 'translate3d(0,-40px,0)' }}
                                to={{ transform: 'translate3d(0,0px,0)' }}>
                                {item => props =>
                                    <div className="item" key={item.key} style={{ ...props }}>
                                        <h3 className="title">{item.title}</h3>
                                        <label className="description">{item.description}</label>
                                        {
                                            item.example.map((example, index) => {
                                                return (
                                                    <div className="example" key={`${item.key}_example_${index}`}>
                                                        <label key={`${item.title}_${index}_japanese`} className="japanese" >{example.japanese}</label>
                                                        <label key={`${item.title}_${index}_romanji`} className="romanji" >{example.romanji}</label>
                                                        <label key={`${item.title}_${index}_english`} className="english" >{example.english}</label>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                }
                            </Trail>
                        </div>
                    )}
                </Transition> */