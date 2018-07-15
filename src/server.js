import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { escape } from 'lodash';

import Html from './common/components/Html';
import App from './common/components/App';

const app = express();

app.use(express.static(path.join(__dirname)));

app.get('*', async (req, res) => {
    const scripts = ['bundle.js'];
    const styles = ['main.css'];

    const initialState = {};

    const sheet = new ServerStyleSheet();

    const appMarkup = ReactDOMServer.renderToString(
        sheet.collectStyles(
            <App {...initialState } />
        )
    );

    const styleTags = sheet.getStyleElement();

    const html = ReactDOMServer.renderToStaticMarkup(
        <Html title="Get To Know Yourself" styles={styles} styleTags={styleTags} body={appMarkup} initialState={initialState} scripts={scripts} />
    );

    res.send(`<!DOCTYPE html>${html}`);
});

app.listen(3000, () => console.log('Server is running on http://localhost:3000...'));