// const express = require('express');
// const webpack = require('webpack');
// const path = require('path');
// const requireFromString = require('require-from-string');
// const MemoryFS = require('memory-fs');
// const serverConfig = require('./../webpack.dev.js');
// const fs = new MemoryFS();
// const outputErrors = (err, stats) => {
//     if (err) {
//          console.error(err.stack || err);
//          if (err.details) {
//               console.error(err.details);
//          }
//          return;
//     }

//     const info = stats.toJson();
//     if (stats.hasErrors()) {
//         console.error(info.errors);
//     }
//     if (stats.hasWarnings()) {
//         console.warn(info.warnings);
//     }
// };
// console.log('Initializing server application...');
// const app = express();
// console.log('Compiling bundle...');
// const serverCompiler = webpack(serverConfig);
// serverCompiler.outputFileSystem = fs;
// serverCompiler.run((err, stats) => {
//     outputErrors(err, stats);
//     const contents = fs.readFileSync(path.resolve(serverConfig.output.path, serverConfig.output.filename), 'utf8');
//     const app2 = requireFromString(contents, serverConfig.output.filename);
//     app.get('*', app2.default);
//     app.listen(3000);
//     console.log('Server listening on port 3000!');
// });

import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Html from './common/components/Html';
import App from './common/components/App';

const app = express();

app.use(express.static(path.join(__dirname)));

app.get('*', async (req, res) => {
    const scripts = ['bundle.js'];

    const appMarkup = ReactDOMServer.renderToString(
        <App />
    );

    const html = ReactDOMServer.renderToStaticMarkup(
        <Html body={appMarkup} scripts={scripts} title="Get To Know Yourself" />
    );

    res.send(`<!DOCTYPE html>${html}`);
});

app.listen(3000, () => console.log('Server is running on http://localhost:3000...'));