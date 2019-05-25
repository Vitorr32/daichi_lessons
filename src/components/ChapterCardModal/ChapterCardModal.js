import React, { Component } from 'react';

import { Keyframes, config } from 'react-spring/renderprops';
import DarkOverlay from '../DarkOverlay/DarkOverlay';

import './ChapterCardModal.css';

export default class ChapterCardModal extends Component {

    getOpeningKeyframes(wrapperBounds, opening, closing) {
        return Keyframes.Spring(async next => {
            if (opening) {
                await next({
                    from: {
                        position: 'fixed',
                        top: `${wrapperBounds.top}px`,
                        left: `${wrapperBounds.left}px`,
                        opacity: 0,
                        height: wrapperBounds.height,
                        width: wrapperBounds.width,
                        background: 'black'
                    },
                    to: { opacity: 1 }
                })
                await next({
                    top: `${window.innerHeight / 2 - wrapperBounds.height / 2}px`,
                    left: `${window.innerWidth / 2 - wrapperBounds.width / 2}px`,
                    background: 'crimson',
                    config: config.wobbly
                })
                await next({
                    top: `${window.innerHeight / 2 - 600 / 2}px`,
                    left: `${window.innerWidth / 2 - 400 / 2}px`,
                    width: 400,
                    height: 600,
                    config: config.wobbly
                })
            }
            else if (closing) {
                await next({
                    from: { opacity: 1 },
                    opacity: 0
                })
                this.props.modalHasClosed();
            }
        })
    }

    closeModalKeyframes() {

    }

    render() {
        const { opening, closing, closeModal, bounds } = this.props;

        if (!opening && !closing) { return null }

        const OpenModal = this.getOpeningKeyframes(bounds, opening, closing);

        return (
            <div className="chapter_modal_wrapper">
                <DarkOverlay opening={opening} onOverlayClick={this.closeModalKeyframes} />
                <OpenModal>
                    {
                        props =>
                            <div style={props}>
                                <button onClick={closeModal}></button>
                            </div>
                    }
                </OpenModal>
            </div>
        )
    }
}