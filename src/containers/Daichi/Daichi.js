import React, { Component } from 'react';
import { connect } from 'react-redux';

import background from '../../assets/images/background.jpg';
import chapters from '../../assets/content/chapters';
import Header from '../../components/Header/Header';

import './Daichi.css';
import ChapterCard from '../../components/ChapterCard/ChapterCard';
import ChapterCardModal from '../../components/ChapterCardModal/ChapterCardModal';
import { openDaichiModal, closedDaichiModal, closingDaichiModal } from '../../redux/actions';

const mapStateToProps = state => {
    return {
        opening: state.daichi.opening,
        closing: state.daichi.closing,
        selectedChapter: state.daichi.selectedChapter,
        selectedBounds: state.daichi.selectedBounds
    };
};

const mapDispatchToProps = dispatch => {
    return {
        openModal: (chapter, bounds) => dispatch(openDaichiModal(chapter, bounds)),
        modalClosing: () => dispatch(closingDaichiModal),
        closeModal: () => dispatch(closedDaichiModal),
    };
};

class Daichi extends Component {

    render() {
        const { opening, closing, selectedChapter, selectedBounds, openModal, modalClosing, closeModal } = this.props;

        return (
            <div className="daichi background" style={{ backgroundImage: `url(${background})` }}>
                <Header />
                <div className="content">
                    <div className="dashboard">
                        {
                            chapters.map((chapter, index) => {
                                return <ChapterCard key={`chapter_${index}`} callForModal={openModal} chapter={chapter} index={index} />
                            })
                        }
                    </div>
                </div>
                <ChapterCardModal opening={opening} closing={closing} modalHasClosed={closeModal} closeModal={modalClosing} chapter={selectedChapter} bounds={selectedBounds} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Daichi);