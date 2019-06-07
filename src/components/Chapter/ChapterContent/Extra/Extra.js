import React, { Component } from 'react';
import ExtraCompositedTable from '../../ExtraCompositedTable/ExtraCompositedTable';
import { EXTRA_CONTENT_COMPOSITED_TABLE_TYPE, EXTRA_CONTENT_SIMPLE_TABLE_TYPE } from '../../../../utils/constants';

import './Extra.css';

export default class Extra extends Component {

    renderExtraContentForChapter(extras) {
        return extras.map((extra, index) => {
            switch (extra.type) {
                case EXTRA_CONTENT_SIMPLE_TABLE_TYPE:
                    return null//TODO
                case EXTRA_CONTENT_COMPOSITED_TABLE_TYPE:
                    return <ExtraCompositedTable key={`extra_${index}`} table={extra} />
                default:
                    console.error("Unknown extra type");
                    return null;
            }
        }).filter(extra => extra !== null);
    }

    render() {
        const { extra } = this.props;

        return (
            extra && extra.lenght !== 0
                ?
                <div className="extra">
                    <span className="title">Extras</span>
                    {this.renderExtraContentForChapter(extra)}
                </div>
                :
                null
        )
    }
}