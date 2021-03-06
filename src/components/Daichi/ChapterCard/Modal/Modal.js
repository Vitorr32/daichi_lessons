import React, { Component } from 'react';

import { Keyframes, config } from 'react-spring/renderprops';
import DarkOverlay from '../../../DarkOverlay/DarkOverlay';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createMarkup } from '../../../../utils/functions';
import { faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import Slides from './Slides/Slides';

import './Modal.css';

export default class ChapterCardModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideshow: 0
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.chapter === this.props.chapter) {
      return false;
    }
  }

  getOpeningKeyframes(wrapperBounds, opening, closing) {
    return Keyframes.Spring(async next => {
      if (opening) {
        await next({
          position: 'fixed',
          top: `${wrapperBounds.top}px`,
          left: `${wrapperBounds.left}px`,
          height: wrapperBounds.height,
          width: wrapperBounds.width,
          //Setting no physhics (Tensions and friction 0) makes the change imediate
          config: { tension: 0, friction: 0 }
        });
        await next({
          top: `${window.innerHeight / 2 - 600 / 2}px`,
          left: `${window.innerWidth / 2 - 600 / 2}px`,
          width: 600,
          height: 600,
          config: { tension: 600, friction: 50 }
        });
        await next({
          from: {
            content_translate: -300,
            content_opacity: 0
          },
          to: {
            content_visibility: 'visible',
            content_translate: 0,
            content_opacity: 1
          },
          config: config.stiff
        });
      } else if (closing) {
        await next({
          //Reapply end of opening style
          //Modal style
          position: 'fixed',
          top: `${window.innerHeight / 2 - 600 / 2}px`,
          left: `${window.innerWidth / 2 - 600 / 2}px`,
          height: 600,
          width: 600,
          content_visibility: 'visible',
          //Content style
          content_translate: 0,
          content_opacity: 1,
          duration: 0,
          config: { tension: 0, friction: 0 }
        });
        await next({
          content_translate: -300,
          content_opacity: 0,
          config: config.stiff
        });
        await next({
          content_visibility: 'hidden',
          config: { tension: 0, friction: 0 }
        });
        await next({
          //From full size modal to normal size
          top: `${wrapperBounds.top}px`,
          left: `${wrapperBounds.left}px`,
          height: wrapperBounds.height,
          width: wrapperBounds.width,
          config: { tension: 600, friction: 50 }
        });
        await next({
          //Hide element from view
          from: { opacity: 1 },
          opacity: 0
        });
        await next({
          //Convert back to original position
          position: 'absolute',
          top: '0px',
          left: '0px',
          config: { tension: 0, friction: 0 }
        });
        this.props.modalHasClosed();
      }
    });
  }

  closeImmediately = () => {
    this.props.closeModal();
    this.props.modalHasClosed();
  };

  render() {
    const { opening, closing, closeModal, bounds, chapter } = this.props;

    if (!opening && !closing) {
      return null;
    }

    const OpenModal = this.getOpeningKeyframes(bounds, opening, closing);

    return (
      <div className='chapter_modal_wrapper'>
        <OpenModal>
          {props => [
            <DarkOverlay
              key='chapter_card_modal_overlay'
              opacity={props.opacity}
              onOverlayClick={closeModal}
            />,
            <div
              key='chapter_card_modal'
              className='modal background'
              style={{
                ...props,
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${chapter.background})`
              }}
            >
              <div
                className='content'
                style={{
                  visibility: props.content_visibility,
                  opacity: props.content_opacity,
                  transform: `translateX(${props.content_translate}px)`
                }}
              >
                <button className='exit' onClick={closeModal}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
                <h1
                  dangerouslySetInnerHTML={createMarkup(chapter.title)}
                  className='title'
                />
                <p
                  className='description'
                  dangerouslySetInnerHTML={createMarkup(chapter.description)}
                />

                <Slides chapter={chapter} />

                <Link
                  className='link'
                  to={`/daichi/${chapter.number}`}
                  onClick={this.closeImmediately}
                >
                  <div className='texts'>
                    <span className='label'>See Content</span>
                    <span className='chapter'>Chapter {chapter.number}</span>
                  </div>
                  <FontAwesomeIcon className='icon' icon={faChevronRight} />
                </Link>
              </div>
            </div>
          ]}
        </OpenModal>
      </div>
    );
  }
}
