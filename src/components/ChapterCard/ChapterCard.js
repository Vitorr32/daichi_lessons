import React, { Component } from 'react';

import { Transition, Trail } from 'react-spring/renderprops';

export default class ChapterCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showContent: false
        }
    }
    render() {
        return (
            <div className="chapter_card"
                onMouseEnter={() => this.setState({ showContent: true })}
                onMouseLeave={() => this.setState({ showContent: false })}>
                <div className="header"></div>
                <Transition
                    items={this.state.showContent}
                    from={{ height: '0px' }}
                    enter={{ height: 'auto' }}
                    leave={{ height: '0px' }}>
                    {show => show && (props =>
                        <div className="content" style={{ ...props }}>
                            {
                                props.content.map(item => {
                                    return (
                                        <div className="item">
                                            <h3 className="title">{item.title}</h3>
                                            <label className="description">{item.description}</label>
                                            <label className="example">{item.example}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )}
                </Transition>
            </div>
        );
    }
}