import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Html from './common/components/Html';
import App from './common/components/App';

const app = express();

app.use(express.static(path.join(__dirname)));

app.get('/', async (req, res, next) => {
    const appMarkup = ReactDOMServer.renderToString(
        <App />
    );

    const html = ReactDOMServer.renderToStaticMarkup(
        <Html title="Get To Know Yourself" children={appMarkup} />
    );

    res.send(`<!DOCTYPE html>${html}`);
});

app.listen(3000, () => console.log('Server is running on localhost:3000...'));