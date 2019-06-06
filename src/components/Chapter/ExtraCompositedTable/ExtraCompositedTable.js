import React from 'react';
import { createMarkup } from '../../../utils/functions';

import './ExtraCompositedTable.css';

export default (props) => {
    return (
        <div className="composited_table">
            <p dangerouslySetInnerHTML={createMarkup(props.table.description)} />
            <table >
                <thead>
                    <tr>
                        <td className="composited_table_header">
                            {props.table.compositedTableHeader}
                        </td>
                        {
                            props.table.headers.map((header, index) => <th key={`header_${index}`} dangerouslySetInnerHTML={createMarkup(header)}></th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.table.content.map((rowContent, index) => (
                            <tr key={`row_${index}`}>
                                <th dangerouslySetInnerHTML={createMarkup(props.table.rowHeaders[index])} />
                                {
                                    rowContent.map((column, index) => <td key={`column_${index}`} dangerouslySetInnerHTML={createMarkup(column)} />)
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}