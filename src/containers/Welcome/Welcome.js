import React, { Component } from 'react';

import content from '../../assets/content/welcome';
import background from '../../assets/images/background.jpg';

import './Welcome.css';
import WelcomeCard from '../../components/WelcomeCard/WelcomeCard';

export default class Welcome extends Component {
    render() {
        return (
            <main style={{ backgroundImage: `url(${background})` }}>
                <h1>Starting to learn Japanese</h1>
                <p>
                    Choose your poison, want to learn gramatical rules? Pick the Daichi lessons,
                    want to test what you learned? Then try the exercises in the Renshuu-chou,
                    if you are looking to learn the vocabulary try the Kanji session where we
                    use the 'Basic Kanji' book.
                </p>
                {
                    content.map(item => {
                        return <WelcomeCard {...item} />
                    })
                }
            </main>
        )
    }
}