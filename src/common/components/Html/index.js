import React from 'react';
import PropTypes from 'prop-types';

class Html extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        body: PropTypes.node.isRequired
    }

    render() {
        const { title, children } = this.props;

        return (
            <html>
            <head>
                <meta charset="utf-8" />
                <title>{title}</title>
            </head>

            <body>
                <div id="root">
                    {body}
                </div>
            </body>
            </html>
        );
    }
}