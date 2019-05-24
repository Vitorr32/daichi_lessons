import React, { Component } from 'react';

import { Keyframes, config } from 'react-spring/renderprops';

import './ChapterCardModal.css';


export default class ChapterCardModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            wrapperBounds: null
        }

        this.container = React.createRef();
    }

    componentDidMount() {
        this.setState({ wrapperBounds: this.container.current.getBoundingClientRect() });
    }

    getKeyframes(wrapperBounds) {
        return Keyframes.Spring(async next => {
            while (true) {
                await next({
                    from: { opacity: 0, height: wrapperBounds.height, width: wrapperBounds.width, background: 'blue' },
                    config: { duration: 3000 },
                    to: { opacity: 1 }
                })
                await next({
                    from: { left: '0%' },
                    left: '70%',
                    background: 'seagreen',
                })
                await next({
                    from: { top: '0%' },
                    top: '40%',
                    background: 'plum',
                    config: config.wobbly,
                })
                await next({ left: '0%', background: 'hotpink' })
                await next({
                    top: '0%',
                    background: 'teal',
                })
                await next({
                    opacity: 0,
                    width: 40,
                    height: 40,
                    background: 'black',
                })
            }
        })
    }

    render() {
        const OpenModal = this.getKeyframes(this.state.wrapperBounds);

        return (
            <div className="chapter_modal_wrapper" ref={this.container} >
                {
                    this.container.current
                        ?
                        <OpenModal>
                            {
                                props =>
                                    <div style={props}>

                                    </div>
                            }
                        </OpenModal>
                        :
                        null
                }
            </div>

        )
    }
}