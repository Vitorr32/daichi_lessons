import React, { Component } from 'react';

import background from '../../assets/images/background.jpg';
import chapters from '../../assets/content/chapters';
import Header from '../../components/Header/Header';

import './Daichi.css';
import ChapterCard from '../../components/ChapterCard/ChapterCard';

export default class Daichi extends Component {
    render() {
        return (
            <div className="daichi background" style={{ backgroundImage: `url(${background})` }}>
                <Header />
                <div className="content">
                    <h1>What book you want to see?</h1>
                    {
                        chapters.map((chapter, index) => {
                            return <ChapterCard {...chapter} index={index} />
                        })
                    }
                </div>
            </div>
        );
    }
}